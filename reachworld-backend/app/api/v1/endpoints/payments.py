from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from app.db import get_db
from app.schemas.payment import (
    DonationRequest,
    DonationResponse,
    SubscriptionCreateRequest,
    SubscriptionResponse,
    OrderCreateRequest,
    OrderResponse,
    PaymentStatusResponse,
)
from app.models import User, Payment, Order, OrderItem, Subscription, Product, PaymentStatus, PaymentType, PaymentGateway
from app.services import StripeService, PaystackService, FlutterwaveService
from typing import List
import uuid
from datetime import datetime

router = APIRouter()


@router.post("/donations", response_model=DonationResponse)
async def create_donation(
    donation: DonationRequest,
    db: Session = Depends(get_db),
):
    """Create a one-time donation payment"""
    try:
        # Get or create user
        user = db.query(User).filter(User.email == donation.email).first()
        if not user:
            user = User(
                email=donation.email,
                full_name=donation.full_name,
                phone=donation.phone,
            )
            db.add(user)
            db.commit()
            db.refresh(user)

        # Create payment intent based on gateway
        if donation.gateway == "stripe":
            payment_intent = await StripeService.create_payment_intent(
                amount=donation.amount,
                currency=donation.currency,
                metadata={
                    "user_id": user.id,
                    "email": user.email,
                    "type": "donation",
                    **(donation.metadata or {}),
                },
            )

            # Create payment record
            payment = Payment(
                user_id=user.id,
                payment_type=PaymentType.ONE_TIME,
                status=PaymentStatus.PENDING,
                amount=donation.amount,
                currency=donation.currency,
                gateway=PaymentGateway.STRIPE,
                gateway_payment_id=payment_intent.id,
                payment_metadata=donation.metadata,
            )
            db.add(payment)
            db.commit()

            return DonationResponse(
                payment_intent_id=payment_intent.id,
                client_secret=payment_intent.client_secret,
                amount=donation.amount,
                currency=donation.currency,
                gateway="stripe",
            )

        elif donation.gateway == "paystack":
            # Generate unique reference
            reference = f"DON-{uuid.uuid4().hex[:12].upper()}"

            # Initialize Paystack transaction
            transaction = await PaystackService.initialize_transaction(
                email=donation.email,
                amount=donation.amount,
                currency=donation.currency,
                reference=reference,
                callback_url=f"{donation.metadata.get('callback_url')}" if donation.metadata else None,
                metadata={
                    "user_id": user.id,
                    "full_name": user.full_name,
                    "type": "donation",
                    **(donation.metadata or {}),
                },
            )

            # Create payment record
            payment = Payment(
                user_id=user.id,
                payment_type=PaymentType.ONE_TIME,
                status=PaymentStatus.PENDING,
                amount=donation.amount,
                currency=donation.currency,
                gateway=PaymentGateway.PAYSTACK,
                gateway_payment_id=reference,
                payment_metadata=donation.metadata,
            )
            db.add(payment)
            db.commit()

            return DonationResponse(
                payment_intent_id=reference,
                authorization_url=transaction["authorization_url"],
                amount=donation.amount,
                currency=donation.currency,
                gateway="paystack",
            )

        elif donation.gateway == "flutterwave":
            # Generate unique reference
            tx_ref = f"DON-{uuid.uuid4().hex[:12].upper()}"

            # Initialize Flutterwave payment
            transaction = await FlutterwaveService.initialize_payment(
                email=donation.email,
                amount=donation.amount,
                currency=donation.currency,
                tx_ref=tx_ref,
                redirect_url=donation.metadata.get("callback_url") if donation.metadata else None,
                customer_name=donation.full_name,
                customer_phone=donation.phone,
                meta={
                    "user_id": user.id,
                    "type": "donation",
                    **(donation.metadata or {}),
                },
            )

            # Create payment record
            payment = Payment(
                user_id=user.id,
                payment_type=PaymentType.ONE_TIME,
                status=PaymentStatus.PENDING,
                amount=donation.amount,
                currency=donation.currency,
                gateway=PaymentGateway.FLUTTERWAVE,
                gateway_payment_id=tx_ref,
                payment_metadata=donation.metadata,
            )
            db.add(payment)
            db.commit()

            return DonationResponse(
                payment_intent_id=tx_ref,
                authorization_url=transaction["authorization_url"],
                amount=donation.amount,
                currency=donation.currency,
                gateway="flutterwave",
            )

        else:
            raise HTTPException(
                status_code=400,
                detail=f"Payment gateway {donation.gateway} not yet implemented",
            )

    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/subscriptions", response_model=SubscriptionResponse)
async def create_subscription(
    subscription_req: SubscriptionCreateRequest,
    db: Session = Depends(get_db),
):
    """Create a monthly partnership subscription"""
    try:
        # Get or create user
        user = db.query(User).filter(User.email == subscription_req.email).first()
        if not user:
            user = User(
                email=subscription_req.email,
                full_name=subscription_req.full_name,
                phone=subscription_req.phone,
            )
            db.add(user)
            db.commit()
            db.refresh(user)

        # Get subscription amount
        amount = StripeService.SUBSCRIPTION_PRICES.get(subscription_req.tier)
        if not amount:
            raise HTTPException(status_code=400, detail="Invalid subscription tier")

        # Create subscription based on gateway
        if subscription_req.gateway == "stripe":
            # Create or get Stripe customer
            customer = await StripeService.create_customer(
                email=user.email,
                name=user.full_name,
                phone=user.phone,
                metadata={"user_id": user.id},
            )

            # Create or get price
            tier_names = {
                "kingdom_partner": "Kingdom Partner",
                "ambassador": "Ambassador",
                "global_influencer": "Global Influencer",
            }
            price = await StripeService.create_price(
                amount=amount,
                currency="usd",
                recurring=True,
                product_name=f"{tier_names.get(subscription_req.tier)} Partnership",
            )

            # Create subscription
            stripe_subscription = await StripeService.create_subscription(
                customer_id=customer.id,
                price_id=price.id,
                payment_method_id=subscription_req.payment_method_id,
                metadata={
                    "user_id": user.id,
                    "tier": subscription_req.tier,
                },
            )

            # Create subscription record
            subscription = Subscription(
                user_id=user.id,
                tier=subscription_req.tier,
                status="incomplete" if stripe_subscription.status == "incomplete" else "active",
                amount=amount,
                currency="USD",
                stripe_subscription_id=stripe_subscription.id,
                stripe_customer_id=customer.id,
                current_period_start=datetime.fromtimestamp(
                    stripe_subscription.current_period_start
                ),
                current_period_end=datetime.fromtimestamp(
                    stripe_subscription.current_period_end
                ),
            )
            db.add(subscription)
            db.commit()
            db.refresh(subscription)

            # Get client secret from latest invoice
            client_secret = None
            if hasattr(stripe_subscription, "latest_invoice"):
                latest_invoice = stripe_subscription.latest_invoice
                if hasattr(latest_invoice, "payment_intent"):
                    payment_intent = latest_invoice.payment_intent
                    if hasattr(payment_intent, "client_secret"):
                        client_secret = payment_intent.client_secret

            return SubscriptionResponse(
                subscription_id=subscription.id,
                tier=subscription.tier.value,
                status=subscription.status.value,
                amount=subscription.amount,
                currency=subscription.currency,
                current_period_start=subscription.current_period_start,
                current_period_end=subscription.current_period_end,
                client_secret=client_secret,
            )

        else:
            raise HTTPException(
                status_code=400,
                detail=f"Payment gateway {subscription_req.gateway} not yet implemented",
            )

    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/orders", response_model=OrderResponse)
async def create_order(
    order_req: OrderCreateRequest,
    db: Session = Depends(get_db),
):
    """Create an order for books or event tickets"""
    try:
        # Get or create user
        user = db.query(User).filter(User.email == order_req.email).first()
        if not user:
            user = User(
                email=order_req.email,
                full_name=order_req.full_name,
                phone=order_req.phone,
            )
            db.add(user)
            db.commit()
            db.refresh(user)

        # Calculate total and create order items
        total_amount = 0.0
        order_items_data = []

        for item in order_req.items:
            product = db.query(Product).filter(Product.id == item.product_id).first()
            if not product:
                raise HTTPException(
                    status_code=404, detail=f"Product {item.product_id} not found"
                )

            if not product.is_active:
                raise HTTPException(
                    status_code=400, detail=f"Product {product.name} is not available"
                )

            item_total = product.price * item.quantity
            total_amount += item_total

            order_items_data.append({
                "product_id": product.id,
                "quantity": item.quantity,
                "unit_price": product.price,
                "total_price": item_total,
                "product_name": product.name,
                "product_description": product.description,
            })

        # Generate order number
        order_number = f"RWN-{uuid.uuid4().hex[:8].upper()}"

        # Create order
        order = Order(
            user_id=user.id,
            order_number=order_number,
            status="pending",
            total_amount=total_amount,
            currency="USD",
            customer_email=order_req.email,
            customer_name=order_req.full_name,
            customer_phone=order_req.phone,
            shipping_address_line1=order_req.shipping_address_line1,
            shipping_address_line2=order_req.shipping_address_line2,
            shipping_city=order_req.shipping_city,
            shipping_state=order_req.shipping_state,
            shipping_country=order_req.shipping_country,
            shipping_postal_code=order_req.shipping_postal_code,
            customer_notes=order_req.customer_notes,
        )
        db.add(order)
        db.flush()

        # Create order items
        for item_data in order_items_data:
            order_item = OrderItem(order_id=order.id, **item_data)
            db.add(order_item)

        db.commit()
        db.refresh(order)

        # Create payment intent based on gateway
        if order_req.gateway == "stripe":
            payment_intent = await StripeService.create_payment_intent(
                amount=total_amount,
                currency="usd",
                metadata={
                    "user_id": user.id,
                    "order_id": order.id,
                    "order_number": order_number,
                },
            )

            # Create payment record
            payment = Payment(
                user_id=user.id,
                order_id=order.id,
                payment_type=PaymentType.ONE_TIME,
                status=PaymentStatus.PENDING,
                amount=total_amount,
                currency="USD",
                gateway=PaymentGateway.STRIPE,
                gateway_payment_id=payment_intent.id,
            )
            db.add(payment)

            order.payment_method = "stripe"
            order.payment_intent_id = payment_intent.id

            db.commit()

            return OrderResponse(
                order_id=order.id,
                order_number=order.order_number,
                total_amount=order.total_amount,
                currency=order.currency,
                status=order.status.value,
                payment_intent_id=payment_intent.id,
                client_secret=payment_intent.client_secret,
            )

        elif order_req.gateway == "paystack":
            # Generate unique reference
            reference = f"ORD-{order_number}"

            # Initialize Paystack transaction
            transaction = await PaystackService.initialize_transaction(
                email=order_req.email,
                amount=total_amount,
                currency=order_req.currency,
                reference=reference,
                callback_url=order_req.callback_url,
                metadata={
                    "user_id": user.id,
                    "order_id": order.id,
                    "order_number": order_number,
                    "type": "order",
                },
            )

            # Create payment record
            payment = Payment(
                user_id=user.id,
                order_id=order.id,
                payment_type=PaymentType.ONE_TIME,
                status=PaymentStatus.PENDING,
                amount=total_amount,
                currency=order_req.currency,
                gateway=PaymentGateway.PAYSTACK,
                gateway_payment_id=reference,
            )
            db.add(payment)

            order.payment_method = "paystack"
            order.payment_intent_id = reference
            order.currency = order_req.currency

            db.commit()

            return OrderResponse(
                order_id=order.id,
                order_number=order.order_number,
                total_amount=order.total_amount,
                currency=order.currency,
                status=order.status.value,
                payment_intent_id=reference,
                authorization_url=transaction["authorization_url"],
            )

        elif order_req.gateway == "flutterwave":
            # Generate unique reference
            tx_ref = f"ORD-{order_number}"

            # Initialize Flutterwave payment
            transaction = await FlutterwaveService.initialize_payment(
                email=order_req.email,
                amount=total_amount,
                currency=order_req.currency,
                tx_ref=tx_ref,
                redirect_url=order_req.callback_url,
                customer_name=order_req.full_name,
                customer_phone=order_req.phone,
                meta={
                    "user_id": user.id,
                    "order_id": order.id,
                    "order_number": order_number,
                    "type": "order",
                },
            )

            # Create payment record
            payment = Payment(
                user_id=user.id,
                order_id=order.id,
                payment_type=PaymentType.ONE_TIME,
                status=PaymentStatus.PENDING,
                amount=total_amount,
                currency=order_req.currency,
                gateway=PaymentGateway.FLUTTERWAVE,
                gateway_payment_id=tx_ref,
            )
            db.add(payment)

            order.payment_method = "flutterwave"
            order.payment_intent_id = tx_ref
            order.currency = order_req.currency

            db.commit()

            return OrderResponse(
                order_id=order.id,
                order_number=order.order_number,
                total_amount=order.total_amount,
                currency=order.currency,
                status=order.status.value,
                payment_intent_id=tx_ref,
                authorization_url=transaction["authorization_url"],
            )

        else:
            raise HTTPException(
                status_code=400,
                detail=f"Payment gateway {order_req.gateway} not yet implemented",
            )

    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/payments/{payment_id}", response_model=PaymentStatusResponse)
async def get_payment_status(
    payment_id: int,
    db: Session = Depends(get_db),
):
    """Get payment status"""
    payment = db.query(Payment).filter(Payment.id == payment_id).first()
    if not payment:
        raise HTTPException(status_code=404, detail="Payment not found")

    return PaymentStatusResponse(
        payment_id=payment.id,
        status=payment.status.value,
        amount=payment.amount,
        currency=payment.currency,
        gateway=payment.gateway.value,
        created_at=payment.created_at,
        succeeded_at=payment.succeeded_at,
        receipt_url=payment.receipt_url,
    )


@router.post("/webhooks/stripe")
async def stripe_webhook(
    request: Request,
    db: Session = Depends(get_db),
):
    """Handle Stripe webhook events"""
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")

    try:
        event = StripeService.construct_webhook_event(payload, sig_header)
        result = await StripeService.handle_webhook_event(event, db)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/webhooks/paystack")
async def paystack_webhook(
    request: Request,
    db: Session = Depends(get_db),
):
    """Handle Paystack webhook events"""
    payload = await request.body()
    signature = request.headers.get("x-paystack-signature")

    try:
        # Verify webhook signature
        if not PaystackService.verify_webhook_signature(payload, signature):
            raise HTTPException(status_code=400, detail="Invalid signature")

        # Parse event
        import json
        event = json.loads(payload)

        # Handle event
        result = await PaystackService.handle_webhook_event(event, db)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/webhooks/flutterwave")
async def flutterwave_webhook(
    request: Request,
    db: Session = Depends(get_db),
):
    """Handle Flutterwave webhook events"""
    payload = await request.body()
    signature = request.headers.get("verif-hash")

    try:
        # Verify webhook signature (optional but recommended)
        if signature and not FlutterwaveService.verify_webhook_signature(payload, signature):
            raise HTTPException(status_code=400, detail="Invalid signature")

        # Parse event
        import json
        event = json.loads(payload)

        # Handle event
        result = await FlutterwaveService.handle_webhook_event(event, db)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
