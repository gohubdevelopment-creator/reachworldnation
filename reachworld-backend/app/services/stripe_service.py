import stripe
from typing import Optional, Dict, Any
from sqlalchemy.orm import Session
from app.core.config import settings
from app.models import User, Payment, Order, Subscription, PaymentStatus, PaymentType, PaymentGateway, SubscriptionStatus
from app.schemas.payment import SubscriptionTierEnum
from datetime import datetime

# Initialize Stripe
stripe.api_key = settings.STRIPE_SECRET_KEY


class StripeService:
    """Service for handling Stripe payment operations"""

    # Subscription tier pricing (monthly in USD)
    SUBSCRIPTION_PRICES = {
        SubscriptionTierEnum.KINGDOM_PARTNER: 50.00,
        SubscriptionTierEnum.PARTNER: 100.00,
        SubscriptionTierEnum.GLOBAL_INFLUENCER: 250.00,
    }

    @staticmethod
    async def create_payment_intent(
        amount: float,
        currency: str = "usd",
        metadata: Optional[Dict[str, Any]] = None,
    ) -> stripe.PaymentIntent:
        """Create a Stripe payment intent for one-time payments"""
        try:
            payment_intent = stripe.PaymentIntent.create(
                amount=int(amount * 100),  # Convert to cents
                currency=currency.lower(),
                metadata=metadata or {},
                automatic_payment_methods={"enabled": True},
            )
            return payment_intent
        except stripe.error.StripeError as e:
            raise Exception(f"Stripe error: {str(e)}")

    @staticmethod
    async def create_customer(
        email: str,
        name: Optional[str] = None,
        phone: Optional[str] = None,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> stripe.Customer:
        """Create a Stripe customer"""
        try:
            customer = stripe.Customer.create(
                email=email,
                name=name,
                phone=phone,
                metadata=metadata or {},
            )
            return customer
        except stripe.error.StripeError as e:
            raise Exception(f"Stripe error: {str(e)}")

    @staticmethod
    async def create_subscription(
        customer_id: str,
        price_id: str,
        payment_method_id: Optional[str] = None,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> stripe.Subscription:
        """Create a Stripe subscription"""
        try:
            subscription_params = {
                "customer": customer_id,
                "items": [{"price": price_id}],
                "metadata": metadata or {},
                "payment_behavior": "default_incomplete",
                "expand": ["latest_invoice.payment_intent"],
            }

            if payment_method_id:
                subscription_params["default_payment_method"] = payment_method_id

            subscription = stripe.Subscription.create(**subscription_params)
            return subscription
        except stripe.error.StripeError as e:
            raise Exception(f"Stripe error: {str(e)}")

    @staticmethod
    async def create_price(
        amount: float,
        currency: str = "usd",
        recurring: bool = True,
        product_name: Optional[str] = None,
    ) -> stripe.Price:
        """Create a Stripe price object"""
        try:
            # Create product first
            product = stripe.Product.create(name=product_name or "Subscription")

            price_params = {
                "unit_amount": int(amount * 100),
                "currency": currency.lower(),
                "product": product.id,
            }

            if recurring:
                price_params["recurring"] = {"interval": "month"}

            price = stripe.Price.create(**price_params)
            return price
        except stripe.error.StripeError as e:
            raise Exception(f"Stripe error: {str(e)}")

    @staticmethod
    async def cancel_subscription(subscription_id: str) -> stripe.Subscription:
        """Cancel a Stripe subscription"""
        try:
            subscription = stripe.Subscription.modify(
                subscription_id,
                cancel_at_period_end=True,
            )
            return subscription
        except stripe.error.StripeError as e:
            raise Exception(f"Stripe error: {str(e)}")

    @staticmethod
    async def retrieve_payment_intent(payment_intent_id: str) -> stripe.PaymentIntent:
        """Retrieve a payment intent"""
        try:
            return stripe.PaymentIntent.retrieve(payment_intent_id)
        except stripe.error.StripeError as e:
            raise Exception(f"Stripe error: {str(e)}")

    @staticmethod
    async def retrieve_subscription(subscription_id: str) -> stripe.Subscription:
        """Retrieve a subscription"""
        try:
            return stripe.Subscription.retrieve(subscription_id)
        except stripe.error.StripeError as e:
            raise Exception(f"Stripe error: {str(e)}")

    @staticmethod
    async def create_refund(
        payment_intent_id: str,
        amount: Optional[int] = None,
        reason: Optional[str] = None,
    ) -> stripe.Refund:
        """Create a refund for a payment"""
        try:
            refund_params = {"payment_intent": payment_intent_id}

            if amount:
                refund_params["amount"] = amount

            if reason:
                refund_params["reason"] = reason

            refund = stripe.Refund.create(**refund_params)
            return refund
        except stripe.error.StripeError as e:
            raise Exception(f"Stripe error: {str(e)}")

    @staticmethod
    def construct_webhook_event(payload: bytes, sig_header: str) -> stripe.Event:
        """Construct and verify a webhook event"""
        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, settings.STRIPE_WEBHOOK_SECRET
            )
            return event
        except ValueError as e:
            raise Exception(f"Invalid payload: {str(e)}")
        except stripe.error.SignatureVerificationError as e:
            raise Exception(f"Invalid signature: {str(e)}")

    @staticmethod
    async def handle_webhook_event(
        event: stripe.Event, db: Session
    ) -> Dict[str, Any]:
        """Handle Stripe webhook events"""
        event_type = event["type"]
        data_object = event["data"]["object"]

        if event_type == "payment_intent.succeeded":
            # Handle successful payment
            payment_intent_id = data_object["id"]
            payment = (
                db.query(Payment)
                .filter(Payment.gateway_payment_id == payment_intent_id)
                .first()
            )

            if payment:
                payment.status = PaymentStatus.SUCCEEDED
                payment.succeeded_at = datetime.utcnow()
                payment.receipt_url = data_object.get("charges", {}).get("data", [{}])[0].get("receipt_url")
                db.commit()

                # Update order status if applicable
                if payment.order_id:
                    order = db.query(Order).filter(Order.id == payment.order_id).first()
                    if order:
                        order.status = "paid"
                        order.paid_at = datetime.utcnow()
                        db.commit()

        elif event_type == "payment_intent.payment_failed":
            # Handle failed payment
            payment_intent_id = data_object["id"]
            payment = (
                db.query(Payment)
                .filter(Payment.gateway_payment_id == payment_intent_id)
                .first()
            )

            if payment:
                payment.status = PaymentStatus.FAILED
                payment.failure_code = data_object.get("last_payment_error", {}).get("code")
                payment.failure_message = data_object.get("last_payment_error", {}).get("message")
                db.commit()

        elif event_type == "customer.subscription.updated":
            # Handle subscription update
            subscription_id = data_object["id"]
            subscription = (
                db.query(Subscription)
                .filter(Subscription.stripe_subscription_id == subscription_id)
                .first()
            )

            if subscription:
                subscription.status = SubscriptionStatus(data_object["status"])
                subscription.current_period_start = datetime.fromtimestamp(
                    data_object["current_period_start"]
                )
                subscription.current_period_end = datetime.fromtimestamp(
                    data_object["current_period_end"]
                )
                db.commit()

        elif event_type == "customer.subscription.deleted":
            # Handle subscription cancellation
            subscription_id = data_object["id"]
            subscription = (
                db.query(Subscription)
                .filter(Subscription.stripe_subscription_id == subscription_id)
                .first()
            )

            if subscription:
                subscription.status = SubscriptionStatus.CANCELED
                subscription.canceled_at = datetime.utcnow()
                db.commit()

        return {"status": "success", "event_type": event_type}
