from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Enum as SQLEnum, Text, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from enum import Enum
from app.db.base import Base


class PaymentStatus(str, Enum):
    PENDING = "pending"
    PROCESSING = "processing"
    SUCCEEDED = "succeeded"
    FAILED = "failed"
    REFUNDED = "refunded"
    PARTIALLY_REFUNDED = "partially_refunded"


class PaymentType(str, Enum):
    ONE_TIME = "one_time"
    SUBSCRIPTION = "subscription"


class PaymentGateway(str, Enum):
    STRIPE = "stripe"
    PAYSTACK = "paystack"
    FLUTTERWAVE = "flutterwave"
    PAYPAL = "paypal"


class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    order_id = Column(Integer, ForeignKey("orders.id"), nullable=True)  # Null for subscriptions
    subscription_id = Column(Integer, ForeignKey("subscriptions.id"), nullable=True)

    # Payment details
    payment_type = Column(SQLEnum(PaymentType), nullable=False)
    status = Column(SQLEnum(PaymentStatus), default=PaymentStatus.PENDING)
    amount = Column(Float, nullable=False)
    currency = Column(String, default="USD")
    gateway = Column(SQLEnum(PaymentGateway), nullable=False)

    # Gateway-specific IDs
    gateway_payment_id = Column(String, unique=True, nullable=False)  # Stripe Payment Intent, Paystack reference
    gateway_customer_id = Column(String, nullable=True)

    # Payment method details
    payment_method = Column(String, nullable=True)  # card, bank_transfer, mobile_money
    card_brand = Column(String, nullable=True)  # visa, mastercard
    card_last4 = Column(String, nullable=True)

    # Refund details
    is_refunded = Column(Boolean, default=False)
    refund_amount = Column(Float, nullable=True)
    refunded_at = Column(DateTime(timezone=True), nullable=True)
    refund_reason = Column(Text, nullable=True)

    # Receipt
    receipt_url = Column(String, nullable=True)
    receipt_number = Column(String, nullable=True)

    # Metadata
    metadata = Column(JSON, nullable=True)  # Store additional gateway-specific data

    # Failure details
    failure_code = Column(String, nullable=True)
    failure_message = Column(Text, nullable=True)

    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    succeeded_at = Column(DateTime(timezone=True), nullable=True)

    # Relationships
    user = relationship("User", back_populates="payments")
    order = relationship("Order", back_populates="payment")
    subscription = relationship("Subscription", back_populates="payments")
