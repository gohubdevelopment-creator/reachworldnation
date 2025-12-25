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
        # Each book has digital (free) and physical (paid) versions
        book_data = [
            {
                "title": "The Kingdom Mindset",
                "slug": "the-kingdom-mindset",
                "description": "Transform your thinking from earthly limitations to heavenly possibilities.",
                "pages": 280,
                "category": "Mindset",
                "price": 19.99,
            },
            {
                "title": "Breaking Free",
                "slug": "breaking-free",
                "description": "Complete deliverance from addiction, bondage, and spiritual strongholds.",
                "pages": 210,
                "category": "Deliverance",
                "price": 17.99,
            },
            {
                "title": "Divine Purpose Unlocked",
                "slug": "divine-purpose-unlocked",
                "description": "Stop wandering aimlessly. Discover God's specific calling for your life.",
                "pages": 320,
                "category": "Purpose",
                "price": 21.99,
            },
            {
                "title": "Faith That Moves Mountains",
                "slug": "faith-that-moves-mountains",
                "description": "Practical steps to activate supernatural faith. Learn how to pray and receive breakthrough.",
                "pages": 250,
                "category": "Faith",
                "price": 18.99,
            },
            {
                "title": "Kingdom Business Mastery",
                "slug": "kingdom-business-mastery",
                "description": "God's blueprint for marketplace success. Biblical principles for building businesses.",
                "pages": 360,
                "category": "Business",
                "price": 24.99,
            },
            {
                "title": "The Power of Declaration",
                "slug": "the-power-of-declaration",
                "description": "Master the art of prophetic declarations that shift atmospheres and manifest divine promises.",
                "pages": 190,
                "category": "Spiritual Warfare",
                "price": 16.99,
            },
        ]

        books = []
        for book in book_data:
            # Digital version (free)
            books.append({
                "name": book["title"],
                "slug": book["slug"],
                "description": book["description"],
                "product_type": ProductType.BOOK_DIGITAL,
                "price": 0.00,
                "is_active": True,
                "author": "Pastor David S. Okeke",
                "pages": book["pages"],
                "category": book["category"],
            })
            # Physical version (paid)
            books.append({
                "name": f"{book['title']} (Physical)",
                "slug": f"{book['slug']}-physical",
                "description": f"Physical copy with shipping included. {book['description']}",
                "product_type": ProductType.BOOK_PHYSICAL,
                "price": book["price"],
                "is_active": True,
                "requires_shipping": True,
                "author": "Pastor David S. Okeke",
                "pages": book["pages"],
                "category": book["category"],
                "weight": 0.5,
            })

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
