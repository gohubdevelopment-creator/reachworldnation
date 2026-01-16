import requests
from typing import Optional, Dict, Any
from sqlalchemy.orm import Session
from app.core.config import settings
from app.models import (
    User,
    Payment,
    Order,
    Subscription,
    PaymentStatus,
    PaymentType,
    PaymentGateway,
    SubscriptionStatus,
)
from app.schemas.payment import SubscriptionTierEnum
from datetime import datetime
import hashlib
import hmac


class PaystackService:
    """Service for handling Paystack payment operations"""

    BASE_URL = "https://api.paystack.co"

    # Subscription tier pricing (monthly in NGN - Nigerian Naira)
    # Using approximate conversion: 1 USD = 800 NGN
    SUBSCRIPTION_PRICES_NGN = {
        SubscriptionTierEnum.KINGDOM_PARTNER: 40000,  # ~$50
        SubscriptionTierEnum.GLOBAL_INFLUENCER: 200000,  # ~$250
    }

    # Also support USD
    SUBSCRIPTION_PRICES_USD = {
        SubscriptionTierEnum.KINGDOM_PARTNER: 50.00,
        SubscriptionTierEnum.GLOBAL_INFLUENCER: 250.00,
    }

    @staticmethod
    def _get_headers() -> Dict[str, str]:
        """Get authorization headers for Paystack API"""
        return {
            "Authorization": f"Bearer {settings.PAYSTACK_SECRET_KEY}",
            "Content-Type": "application/json",
        }

    @staticmethod
    async def initialize_transaction(
        email: str,
        amount: float,
        currency: str = "NGN",
        reference: Optional[str] = None,
        callback_url: Optional[str] = None,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        """
        Initialize a Paystack transaction

        Args:
            email: Customer email
            amount: Amount in kobo (for NGN) or cents (for USD/GHS)
            currency: Currency code (NGN, USD, GHS, ZAR, KES)
            reference: Unique transaction reference
            callback_url: URL to redirect after payment
            metadata: Additional data

        Returns:
            Dict with authorization_url, access_code, and reference
        """
        url = f"{PaystackService.BASE_URL}/transaction/initialize"

        # Convert amount to smallest unit (kobo for NGN, cents for others)
        amount_in_kobo = int(amount * 100)

        payload = {
            "email": email,
            "amount": amount_in_kobo,
            "currency": currency.upper(),
        }

        if reference:
            payload["reference"] = reference

        if callback_url:
            payload["callback_url"] = callback_url

        if metadata:
            payload["metadata"] = metadata

        try:
            response = requests.post(
                url, json=payload, headers=PaystackService._get_headers()
            )
            response.raise_for_status()
            data = response.json()

            if data.get("status"):
                return data["data"]
            else:
                raise Exception(f"Paystack error: {data.get('message')}")

        except requests.exceptions.RequestException as e:
            raise Exception(f"Paystack API error: {str(e)}")

    @staticmethod
    async def verify_transaction(reference: str) -> Dict[str, Any]:
        """
        Verify a transaction

        Args:
            reference: Transaction reference

        Returns:
            Transaction data
        """
        url = f"{PaystackService.BASE_URL}/transaction/verify/{reference}"

        try:
            response = requests.get(url, headers=PaystackService._get_headers())
            response.raise_for_status()
            data = response.json()

            if data.get("status"):
                return data["data"]
            else:
                raise Exception(f"Paystack error: {data.get('message')}")

        except requests.exceptions.RequestException as e:
            raise Exception(f"Paystack API error: {str(e)}")

    @staticmethod
    async def create_customer(
        email: str,
        first_name: Optional[str] = None,
        last_name: Optional[str] = None,
        phone: Optional[str] = None,
        metadata: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        """Create a Paystack customer"""
        url = f"{PaystackService.BASE_URL}/customer"

        payload = {"email": email}

        if first_name:
            payload["first_name"] = first_name

        if last_name:
            payload["last_name"] = last_name

        if phone:
            payload["phone"] = phone

        if metadata:
            payload["metadata"] = metadata

        try:
            response = requests.post(
                url, json=payload, headers=PaystackService._get_headers()
            )
            response.raise_for_status()
            data = response.json()

            if data.get("status"):
                return data["data"]
            else:
                raise Exception(f"Paystack error: {data.get('message')}")

        except requests.exceptions.RequestException as e:
            raise Exception(f"Paystack API error: {str(e)}")

    @staticmethod
    async def create_plan(
        name: str,
        amount: int,
        interval: str = "monthly",
        currency: str = "NGN",
    ) -> Dict[str, Any]:
        """
        Create a subscription plan

        Args:
            name: Plan name
            amount: Amount in kobo (NGN) or cents
            interval: Billing interval (hourly, daily, weekly, monthly, annually)
            currency: Currency code
        """
        url = f"{PaystackService.BASE_URL}/plan"

        payload = {
            "name": name,
            "amount": amount,
            "interval": interval,
            "currency": currency.upper(),
        }

        try:
            response = requests.post(
                url, json=payload, headers=PaystackService._get_headers()
            )
            response.raise_for_status()
            data = response.json()

            if data.get("status"):
                return data["data"]
            else:
                raise Exception(f"Paystack error: {data.get('message')}")

        except requests.exceptions.RequestException as e:
            raise Exception(f"Paystack API error: {str(e)}")

    @staticmethod
    async def create_subscription(
        customer_code: str,
        plan_code: str,
        authorization_code: Optional[str] = None,
    ) -> Dict[str, Any]:
        """
        Create a subscription

        Args:
            customer_code: Customer code from Paystack
            plan_code: Plan code from Paystack
            authorization_code: Authorization code from previous transaction
        """
        url = f"{PaystackService.BASE_URL}/subscription"

        payload = {
            "customer": customer_code,
            "plan": plan_code,
        }

        if authorization_code:
            payload["authorization"] = authorization_code

        try:
            response = requests.post(
                url, json=payload, headers=PaystackService._get_headers()
            )
            response.raise_for_status()
            data = response.json()

            if data.get("status"):
                return data["data"]
            else:
                raise Exception(f"Paystack error: {data.get('message')}")

        except requests.exceptions.RequestException as e:
            raise Exception(f"Paystack API error: {str(e)}")

    @staticmethod
    async def cancel_subscription(
        subscription_code: str, email_token: str
    ) -> Dict[str, Any]:
        """
        Cancel a subscription

        Args:
            subscription_code: Subscription code
            email_token: Email token from subscription email
        """
        url = f"{PaystackService.BASE_URL}/subscription/disable"

        payload = {"code": subscription_code, "token": email_token}

        try:
            response = requests.post(
                url, json=payload, headers=PaystackService._get_headers()
            )
            response.raise_for_status()
            data = response.json()

            if data.get("status"):
                return data["data"]
            else:
                raise Exception(f"Paystack error: {data.get('message')}")

        except requests.exceptions.RequestException as e:
            raise Exception(f"Paystack API error: {str(e)}")

    @staticmethod
    def verify_webhook_signature(payload: bytes, signature: str) -> bool:
        """
        Verify Paystack webhook signature

        Args:
            payload: Raw request body
            signature: x-paystack-signature header value

        Returns:
            True if signature is valid
        """
        computed_signature = hmac.new(
            settings.PAYSTACK_SECRET_KEY.encode("utf-8"),
            payload,
            hashlib.sha512,
        ).hexdigest()

        return hmac.compare_digest(computed_signature, signature)

    @staticmethod
    async def handle_webhook_event(event: Dict[str, Any], db: Session) -> Dict[str, Any]:
        """Handle Paystack webhook events"""
        event_type = event.get("event")
        data = event.get("data", {})

        if event_type == "charge.success":
            # Handle successful payment
            reference = data.get("reference")
            payment = (
                db.query(Payment)
                .filter(Payment.gateway_payment_id == reference)
                .first()
            )

            if payment:
                payment.status = PaymentStatus.SUCCEEDED
                payment.succeeded_at = datetime.utcnow()
                payment.payment_method = data.get("channel")  # card, bank, ussd, etc.

                # Extract card details if available
                authorization = data.get("authorization", {})
                if authorization:
                    payment.card_brand = authorization.get("brand")
                    payment.card_last4 = authorization.get("last4")

                db.commit()

                # Update order status if applicable
                if payment.order_id:
                    order = db.query(Order).filter(Order.id == payment.order_id).first()
                    if order:
                        order.status = "paid"
                        order.paid_at = datetime.utcnow()
                        db.commit()

        elif event_type == "charge.failed":
            # Handle failed payment
            reference = data.get("reference")
            payment = (
                db.query(Payment)
                .filter(Payment.gateway_payment_id == reference)
                .first()
            )

            if payment:
                payment.status = PaymentStatus.FAILED
                payment.failure_message = data.get("gateway_response")
                db.commit()

        elif event_type == "subscription.create":
            # Handle subscription creation
            subscription_code = data.get("subscription_code")
            subscription = (
                db.query(Subscription)
                .filter(Subscription.paystack_subscription_code == subscription_code)
                .first()
            )

            if subscription:
                subscription.status = SubscriptionStatus.ACTIVE
                db.commit()

        elif event_type == "subscription.disable":
            # Handle subscription cancellation
            subscription_code = data.get("subscription_code")
            subscription = (
                db.query(Subscription)
                .filter(Subscription.paystack_subscription_code == subscription_code)
                .first()
            )

            if subscription:
                subscription.status = SubscriptionStatus.CANCELED
                subscription.canceled_at = datetime.utcnow()
                db.commit()

        elif event_type == "invoice.payment_failed":
            # Handle failed subscription payment
            subscription_code = data.get("subscription", {}).get("subscription_code")
            subscription = (
                db.query(Subscription)
                .filter(Subscription.paystack_subscription_code == subscription_code)
                .first()
            )

            if subscription:
                subscription.status = SubscriptionStatus.PAST_DUE
                db.commit()

        return {"status": "success", "event_type": event_type}
