from sqlalchemy import Column, Integer, String, Float, Boolean, Text, DateTime, Enum as SQLEnum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from enum import Enum
from app.db.base import Base


class ProductType(str, Enum):
    BOOK_DIGITAL = "book_digital"
    BOOK_PHYSICAL = "book_physical"
    EVENT_TICKET = "event_ticket"


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True, nullable=False)
    description = Column(Text, nullable=True)
    product_type = Column(SQLEnum(ProductType), nullable=False)

    # Pricing
    price = Column(Float, nullable=False)
    currency = Column(String, default="USD")

    # Inventory
    is_active = Column(Boolean, default=True)
    stock_quantity = Column(Integer, nullable=True)  # Null for digital products

    # Digital product details
    download_url = Column(String, nullable=True)
    file_size = Column(Integer, nullable=True)  # In bytes

    # Physical product details
    requires_shipping = Column(Boolean, default=False)
    weight = Column(Float, nullable=True)  # In kg

    # Book-specific
    isbn = Column(String, unique=True, nullable=True)
    author = Column(String, nullable=True)
    pages = Column(Integer, nullable=True)
    category = Column(String, nullable=True)

    # Event-specific
    event_date = Column(DateTime(timezone=True), nullable=True)
    event_location = Column(String, nullable=True)
    event_venue = Column(String, nullable=True)
    max_attendees = Column(Integer, nullable=True)

    # Stripe
    stripe_product_id = Column(String, unique=True, nullable=True)
    stripe_price_id = Column(String, unique=True, nullable=True)

    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    order_items = relationship("OrderItem", back_populates="product")
