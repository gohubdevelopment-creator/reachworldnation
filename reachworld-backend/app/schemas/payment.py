from pydantic import BaseModel, EmailStr, Field
from typing import Optional, Dict, Any
from datetime import datetime
from enum import Enum


class PaymentGatewayEnum(str, Enum):
    STRIPE = "stripe"
    PAYSTACK = "paystack"
    FLUTTERWAVE = "flutterwave"


class SubscriptionTierEnum(str, Enum):
    KINGDOM_PARTNER = "kingdom_partner"  # $50/month
    PARTNER = "partner"  # $100/month
    GLOBAL_INFLUENCER = "global_influencer"  # $250+/month


class ProductTypeEnum(str, Enum):
    BOOK_DIGITAL = "book_digital"
    BOOK_PHYSICAL = "book_physical"
    EVENT_TICKET = "event_ticket"


# One-time donation schemas
class DonationRequest(BaseModel):
    amount: float = Field(..., gt=0, description="Donation amount in USD")
    email: EmailStr
    full_name: Optional[str] = None
    phone: Optional[str] = None
    currency: str = Field(default="USD", description="Currency code")
    gateway: PaymentGatewayEnum = Field(default=PaymentGatewayEnum.STRIPE)
    metadata: Optional[Dict[str, Any]] = None


class DonationResponse(BaseModel):
    payment_intent_id: str
    client_secret: Optional[str] = None  # For Stripe
    authorization_url: Optional[str] = None  # For Paystack/Flutterwave
    amount: float
    currency: str
    gateway: str


# Subscription schemas
class SubscriptionCreateRequest(BaseModel):
    tier: SubscriptionTierEnum
    email: EmailStr
    full_name: Optional[str] = None
    phone: Optional[str] = None
    gateway: PaymentGatewayEnum = Field(default=PaymentGatewayEnum.STRIPE)
    payment_method_id: Optional[str] = None  # For Stripe
    callback_url: Optional[str] = None  # For Paystack/Flutterwave redirect


class SubscriptionResponse(BaseModel):
    subscription_id: int
    tier: str
    status: str
    amount: float
    currency: str
    current_period_start: Optional[datetime] = None
    current_period_end: Optional[datetime] = None
    client_secret: Optional[str] = None
    authorization_url: Optional[str] = None

    class Config:
        from_attributes = True


# Product purchase schemas
class OrderItemRequest(BaseModel):
    product_id: int
    quantity: int = Field(default=1, ge=1)


class OrderCreateRequest(BaseModel):
    items: list[OrderItemRequest] = Field(..., min_length=1)
    email: EmailStr
    full_name: Optional[str] = None
    phone: Optional[str] = None
    gateway: PaymentGatewayEnum = Field(default=PaymentGatewayEnum.STRIPE)
    currency: str = Field(default="USD", description="Currency code")
    callback_url: Optional[str] = None

    # Shipping address (required for physical products)
    shipping_address_line1: Optional[str] = None
    shipping_address_line2: Optional[str] = None
    shipping_city: Optional[str] = None
    shipping_state: Optional[str] = None
    shipping_country: Optional[str] = None
    shipping_postal_code: Optional[str] = None
    customer_notes: Optional[str] = None


class OrderResponse(BaseModel):
    order_id: int
    order_number: str
    total_amount: float
    currency: str
    status: str
    payment_intent_id: Optional[str] = None
    client_secret: Optional[str] = None
    authorization_url: Optional[str] = None

    class Config:
        from_attributes = True


# Webhook schemas
class WebhookEvent(BaseModel):
    event_type: str
    gateway: str
    payload: Dict[str, Any]


# Payment status response
class PaymentStatusResponse(BaseModel):
    payment_id: int
    status: str
    amount: float
    currency: str
    gateway: str
    created_at: datetime
    succeeded_at: Optional[datetime] = None
    receipt_url: Optional[str] = None

    class Config:
        from_attributes = True
