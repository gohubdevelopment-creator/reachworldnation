import requests
from typing import Optional, Dict, Any
from sqlalchemy.orm import Session
from app.core.config import settings
from app.models import (
    Payment,
    Order,
    Subscription,
    PaymentStatus,
    SubscriptionStatus,
)
from app.schemas.payment import SubscriptionTierEnum
from datetime import datetime
import hashlib
import hmac


class FlutterwaveService:
    """Service for handling Flutterwave payment operations"""

    BASE_URL = "https://api.flutterwave.com/v3"

    # Subscription tier pricing (monthly in NGN - Nigerian Naira)
    SUBSCRIPTION_PRICES_NGN = {
        SubscriptionTierEnum.KINGDOM_PARTNER: 40000,  # ~$50
        SubscriptionTierEnum.AMBASSADOR: 80000,  # ~$100
        SubscriptionTierEnum.GLOBAL_INFLUENCER: 200000,  # ~$250
    }

    # Also support USD
    SUBSCRIPTION_PRICES_USD = {
        SubscriptionTierEnum.KINGDOM_PARTNER: 50.00,
        SubscriptionTierEnum.AMBASSADOR: 100.00,
        SubscriptionTierEnum.GLOBAL_INFLUENCER: 250.00,
    }

    @staticmethod
    def _get_headers() -> Dict[str, str]:
        """Get authorization headers for Flutterwave API"""
        return {
            "Authorization": f"Bearer {settings.FLUTTERWAVE_SECRET_KEY}",
            "Content-Type": "application/json",
        }

    @staticmethod
    async def initialize_payment(
        email: str,
        amount: float,
        currency: str = "NGN",
        tx_ref: Optional[str] = None,
        redirect_url: Optional[str] = None,
        customer_name: Optional[str] = None,
        customer_phone: Optional[str] = None,
        meta: Optional[Dict[str, Any]] = None,
        payment_options: str = "card,banktransfer,ussd",
    ) -> Dict[str, Any]:
        """
        Initialize a Flutterwave payment

        Args:
            email: Customer email
            amount: Amount to charge
            currency: Currency code (NGN, USD, GHS, KES, ZAR, etc.)
            tx_ref: Unique transaction reference
            redirect_url: URL to redirect after payment
            customer_name: Customer's full name
            customer_phone: Customer's phone number
            meta: Additional metadata
            payment_options: Comma-separated payment options

        Returns:
            Dict with payment link and other details
        """
        url = f"{FlutterwaveService.BASE_URL}/payments"

        payload = {
            "tx_ref": tx_ref,
            "amount": amount,
            "currency": currency.upper(),
            "redirect_url": redirect_url,
            "payment_options": payment_options,
            "customer": {
                "email": email,
            },
            "customizations": {
                "title": "ReachWorld Nation",
                "description": "Payment for ReachWorld Nation",
                "logo": "https://reachworldnation.vercel.app/ReachworldLogo.jpg",
            },
        }

        if customer_name:
            payload["customer"]["name"] = customer_name

        if customer_phone:
            payload["customer"]["phonenumber"] = customer_phone

        if meta:
            payload["meta"] = meta

        try:
            response = requests.post(
                url, json=payload, headers=FlutterwaveService._get_headers()
            )
            response.raise_for_status()
            data = response.json()

            if data.get("status") == "success":
                return {
                    "authorization_url": data["data"]["link"],
                    "tx_ref": tx_ref,
                }
            else:
                raise Exception(f"Flutterwave error: {data.get('message')}")

        except requests.exceptions.RequestException as e:
            raise Exception(f"Flutterwave API error: {str(e)}")

    @staticmethod
    async def verify_transaction(transaction_id: int) -> Dict[str, Any]:
        """
        Verify a transaction by ID

        Args:
            transaction_id: Flutterwave transaction ID

        Returns:
            Transaction data
        """
        url = f"{FlutterwaveService.BASE_URL}/transactions/{transaction_id}/verify"

        try:
            response = requests.get(url, headers=FlutterwaveService._get_headers())
            response.raise_for_status()
            data = response.json()

            if data.get("status") == "success":
                return data["data"]
            else:
                raise Exception(f"Flutterwave error: {data.get('message')}")

        except requests.exceptions.RequestException as e:
            raise Exception(f"Flutterwave API error: {str(e)}")

    @staticmethod
    async def verify_transaction_by_ref(tx_ref: str) -> Dict[str, Any]:
        """
        Verify a transaction by reference

        Args:
            tx_ref: Transaction reference

        Returns:
            Transaction data
        """
        url = f"{FlutterwaveService.BASE_URL}/transactions/verify_by_reference"
        params = {"tx_ref": tx_ref}

        try:
            response = requests.get(
                url, params=params, headers=FlutterwaveService._get_headers()
            )
            response.raise_for_status()
            data = response.json()

            if data.get("status") == "success":
                return data["data"]
            else:
                raise Exception(f"Flutterwave error: {data.get('message')}")

        except requests.exceptions.RequestException as e:
            raise Exception(f"Flutterwave API error: {str(e)}")

    @staticmethod
    async def create_payment_plan(
        name: str,
        amount: int,
        interval: str = "monthly",
        currency: str = "NGN",
    ) -> Dict[str, Any]:
        """
        Create a payment/subscription plan

        Args:
            name: Plan name
            amount: Amount to charge
            interval: Billing interval (daily, weekly, monthly, yearly)
            currency: Currency code
        """
        url = f"{FlutterwaveService.BASE_URL}/payment-plans"

        payload = {
            "name": name,
            "amount": amount,
            "interval": interval,
            "currency": currency.upper(),
        }

        try:
            response = requests.post(
                url, json=payload, headers=FlutterwaveService._get_headers()
            )
            response.raise_for_status()
            data = response.json()

            if data.get("status") == "success":
                return data["data"]
            else:
                raise Exception(f"Flutterwave error: {data.get('message')}")

        except requests.exceptions.RequestException as e:
            raise Exception(f"Flutterwave API error: {str(e)}")

    @staticmethod
    async def cancel_payment_plan(plan_id: int) -> Dict[str, Any]:
        """
        Cancel a payment plan

        Args:
            plan_id: Payment plan ID
        """
        url = f"{FlutterwaveService.BASE_URL}/payment-plans/{plan_id}/cancel"

        try:
            response = requests.put(url, headers=FlutterwaveService._get_headers())
            response.raise_for_status()
            data = response.json()

            if data.get("status") == "success":
                return data["data"]
            else:
                raise Exception(f"Flutterwave error: {data.get('message')}")

        except requests.exceptions.RequestException as e:
            raise Exception(f"Flutterwave API error: {str(e)}")

    @staticmethod
    async def initiate_refund(
        transaction_id: int,
        amount: Optional[float] = None,
    ) -> Dict[str, Any]:
        """
        Initiate a refund

        Args:
            transaction_id: Flutterwave transaction ID
            amount: Amount to refund (optional, full refund if not specified)
        """
        url = f"{FlutterwaveService.BASE_URL}/transactions/{transaction_id}/refund"

        payload = {}
        if amount:
            payload["amount"] = amount

        try:
            response = requests.post(
                url, json=payload, headers=FlutterwaveService._get_headers()
            )
            response.raise_for_status()
            data = response.json()

            if data.get("status") == "success":
                return data["data"]
            else:
                raise Exception(f"Flutterwave error: {data.get('message')}")

        except requests.exceptions.RequestException as e:
            raise Exception(f"Flutterwave API error: {str(e)}")

    @staticmethod
    def verify_webhook_signature(payload: bytes, signature: str) -> bool:
        """
        Verify Flutterwave webhook signature

        Args:
            payload: Raw request body
            signature: verif-hash header value

        Returns:
            True if signature is valid
        """
        # Flutterwave uses the secret hash set in the dashboard
        # The signature should match the FLUTTERWAVE_SECRET_KEY or a custom hash
        secret_hash = settings.FLUTTERWAVE_SECRET_KEY
        return hmac.compare_digest(signature, secret_hash)

    @staticmethod
    async def handle_webhook_event(
        event: Dict[str, Any], db: Session
    ) -> Dict[str, Any]:
        """Handle Flutterwave webhook events"""
        event_type = event.get("event")
        data = event.get("data", {})

        if event_type == "charge.completed":
            # Handle successful payment
            tx_ref = data.get("tx_ref")
            status = data.get("status")

            payment = (
                db.query(Payment)
                .filter(Payment.gateway_payment_id == tx_ref)
                .first()
            )

            if payment:
                if status == "successful":
                    payment.status = PaymentStatus.SUCCEEDED
                    payment.succeeded_at = datetime.utcnow()
                    payment.payment_method = data.get("payment_type")  # card, bank_transfer, ussd

                    # Store Flutterwave transaction ID
                    payment.gateway_transaction_id = str(data.get("id"))

                    # Extract card details if available
                    card = data.get("card", {})
                    if card:
                        payment.card_brand = card.get("type")
                        payment.card_last4 = card.get("last_4digits")

                    db.commit()

                    # Update order status if applicable
                    if payment.order_id:
                        order = db.query(Order).filter(Order.id == payment.order_id).first()
                        if order:
                            order.status = "paid"
                            order.paid_at = datetime.utcnow()
                            db.commit()
                else:
                    payment.status = PaymentStatus.FAILED
                    payment.failure_message = data.get("processor_response")
                    db.commit()

        elif event_type == "transfer.completed":
            # Handle transfer completion (for payouts)
            pass

        elif event_type == "subscription.cancelled":
            # Handle subscription cancellation
            plan_id = data.get("plan")
            subscription = (
                db.query(Subscription)
                .filter(Subscription.flutterwave_plan_id == str(plan_id))
                .first()
            )

            if subscription:
                subscription.status = SubscriptionStatus.CANCELED
                subscription.canceled_at = datetime.utcnow()
                db.commit()

        return {"status": "success", "event_type": event_type}
