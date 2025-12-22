"""
Initialize database with sample data for testing
"""
import sys
import os

# Add parent directory to path
sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from app.db import SessionLocal, Base, engine
from app.models import Product, ProductType

def init_db():
    """Initialize database with sample products"""

    print("Creating database tables...")
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()

    try:
        # Check if products already exist
        existing_products = db.query(Product).count()
        if existing_products > 0:
            print(f"Database already has {existing_products} products. Skipping initialization.")
            return

        print("Adding sample products...")

        # Sample books (matching BooksPage.jsx)
        books = [
            {
                "name": "The Kingdom Mindset",
                "slug": "the-kingdom-mindset",
                "description": "Transform your thinking from earthly limitations to heavenly possibilities.",
                "product_type": ProductType.BOOK_DIGITAL,
                "price": 0.00,  # Free digital
                "is_active": True,
                "author": "Pastor David S. Okeke",
                "pages": 280,
                "category": "Mindset",
            },
            {
                "name": "The Kingdom Mindset (Physical)",
                "slug": "the-kingdom-mindset-physical",
                "description": "Physical copy with shipping included.",
                "product_type": ProductType.BOOK_PHYSICAL,
                "price": 19.99,
                "is_active": True,
                "requires_shipping": True,
                "author": "Pastor David S. Okeke",
                "pages": 280,
                "category": "Mindset",
                "weight": 0.5,
            },
            {
                "name": "Breaking Free",
                "slug": "breaking-free",
                "description": "Complete deliverance from addiction, bondage, and spiritual strongholds.",
                "product_type": ProductType.BOOK_DIGITAL,
                "price": 0.00,
                "is_active": True,
                "author": "Pastor David S. Okeke",
                "pages": 210,
                "category": "Deliverance",
            },
            {
                "name": "Divine Purpose Unlocked",
                "slug": "divine-purpose-unlocked",
                "description": "Stop wandering aimlessly. Discover God's specific calling for your life.",
                "product_type": ProductType.BOOK_DIGITAL,
                "price": 0.00,
                "is_active": True,
                "author": "Pastor David S. Okeke",
                "pages": 320,
                "category": "Purpose",
            },
        ]

        # Sample events (matching EventsPage.jsx)
        events = [
            {
                "name": "Divinity Life Conference 2025 - General Admission",
                "slug": "divinity-life-conference-2025",
                "description": "Three days that will change your life forever. June 15-17, 2025 in Lagos.",
                "product_type": ProductType.EVENT_TICKET,
                "price": 50.00,
                "is_active": True,
                "event_location": "Lagos, Nigeria",
                "event_venue": "Eko Convention Center",
                "max_attendees": 20000,
            },
            {
                "name": "Global Leadership Summit 2025",
                "slug": "global-leadership-summit-2025",
                "description": "Empowering leaders to transform their spheres of influence. August 10-12, 2025 in London.",
                "product_type": ProductType.EVENT_TICKET,
                "price": 150.00,
                "is_active": True,
                "event_location": "London, UK",
                "event_venue": "Excel London",
                "max_attendees": 8000,
            },
        ]

        for book_data in books:
            product = Product(**book_data)
            db.add(product)
            print(f"  ✓ Added: {book_data['name']}")

        for event_data in events:
            product = Product(**event_data)
            db.add(product)
            print(f"  ✓ Added: {event_data['name']}")

        db.commit()

        total_products = db.query(Product).count()
        print(f"\n✅ Database initialized successfully!")
        print(f"   Total products: {total_products}")
        print(f"   Books: {len(books)}")
        print(f"   Events: {len(events)}")

    except Exception as e:
        print(f"❌ Error initializing database: {str(e)}")
        db.rollback()
    finally:
        db.close()


if __name__ == "__main__":
    print("=" * 60)
    print("ReachWorld Nation - Database Initialization")
    print("=" * 60)
    init_db()
