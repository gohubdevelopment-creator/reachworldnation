import logging
import sys
import os

# Configure logging first - flush immediately
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[logging.StreamHandler(sys.stdout)]
)
logger = logging.getLogger(__name__)

# Force flush on every log
class FlushHandler(logging.StreamHandler):
    def emit(self, record):
        super().emit(record)
        self.flush()

for handler in logging.root.handlers[:]:
    logging.root.removeHandler(handler)
logging.root.addHandler(FlushHandler(sys.stdout))
logging.root.setLevel(logging.DEBUG)

print("=" * 50, flush=True)
print("REACHWORLD BACKEND STARTING", flush=True)
print(f"Python version: {sys.version}", flush=True)
print(f"PORT env var: {os.environ.get('PORT', 'NOT SET')}", flush=True)
print(f"DATABASE_URL exists: {bool(os.environ.get('DATABASE_URL'))}", flush=True)
print(f"SECRET_KEY exists: {bool(os.environ.get('SECRET_KEY'))}", flush=True)
print(f"JWT_SECRET_KEY exists: {bool(os.environ.get('JWT_SECRET_KEY'))}", flush=True)
print(f"STRIPE_SECRET_KEY exists: {bool(os.environ.get('STRIPE_SECRET_KEY'))}", flush=True)
print(f"STRIPE_PUBLISHABLE_KEY exists: {bool(os.environ.get('STRIPE_PUBLISHABLE_KEY'))}", flush=True)
print(f"STRIPE_WEBHOOK_SECRET exists: {bool(os.environ.get('STRIPE_WEBHOOK_SECRET'))}", flush=True)
print(f"FIRST_SUPERUSER_PASSWORD exists: {bool(os.environ.get('FIRST_SUPERUSER_PASSWORD'))}", flush=True)
print("=" * 50, flush=True)

logger.info("Starting ReachWorld Nation API...")

try:
    logger.info("Step 1: Importing FastAPI...")
    sys.stdout.flush()
    from fastapi import FastAPI
    from fastapi.middleware.cors import CORSMiddleware
    logger.info("Step 1 COMPLETE: FastAPI imported successfully")
    sys.stdout.flush()

    logger.info("Step 2: Loading settings...")
    sys.stdout.flush()
    from app.core.config import settings
    logger.info(f"Step 2 COMPLETE: Settings loaded - APP_NAME: {settings.APP_NAME}, DEBUG: {settings.DEBUG}")
    logger.info(f"DATABASE_URL starts with: {settings.DATABASE_URL[:30] if settings.DATABASE_URL else 'NONE'}...")
    logger.info(f"ALLOWED_ORIGINS: {settings.ALLOWED_ORIGINS}")
    sys.stdout.flush()

    logger.info("Step 3: Importing API router...")
    sys.stdout.flush()
    from app.api.v1 import api_router
    logger.info("Step 3 COMPLETE: API router imported successfully")
    sys.stdout.flush()

    logger.info("Step 4: Importing database module...")
    sys.stdout.flush()
    from app.db import Base, engine
    logger.info("Step 4 COMPLETE: Database module imported successfully")
    sys.stdout.flush()

    logger.info("Step 5: Creating database tables...")
    sys.stdout.flush()
    Base.metadata.create_all(bind=engine)
    logger.info("Step 5 COMPLETE: Database tables created successfully")
    sys.stdout.flush()

except Exception as e:
    print(f"STARTUP ERROR: {e}", flush=True)
    logger.error(f"STARTUP ERROR: {e}")
    import traceback
    error_trace = traceback.format_exc()
    print(error_trace, flush=True)
    logger.error(error_trace)
    sys.stdout.flush()
    raise

# Initialize FastAPI app
logger.info("Initializing FastAPI app...")
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.API_VERSION,
    debug=settings.DEBUG,
)
logger.info("FastAPI app initialized")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API router
app.include_router(api_router, prefix=f"/{settings.API_VERSION}")


@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "ReachWorld Nation API",
        "version": settings.API_VERSION,
        "status": "active",
    }


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}


@app.post("/init-db")
async def init_database():
    """Initialize database with sample products (one-time use)"""
    from app.db import SessionLocal
    from app.models import Product, ProductType

    db = SessionLocal()

    try:
        # Check if products already exist
        existing_products = db.query(Product).count()
        if existing_products > 0:
            return {"status": "skipped", "message": f"Database already has {existing_products} products"}

        # Sample books
        book_data = [
            {"title": "The Kingdom Mindset", "slug": "the-kingdom-mindset", "description": "Transform your thinking from earthly limitations to heavenly possibilities.", "pages": 280, "category": "Mindset", "price": 19.99},
            {"title": "Breaking Free", "slug": "breaking-free", "description": "Complete deliverance from addiction, bondage, and spiritual strongholds.", "pages": 210, "category": "Deliverance", "price": 17.99},
            {"title": "Divine Purpose Unlocked", "slug": "divine-purpose-unlocked", "description": "Stop wandering aimlessly. Discover God's specific calling for your life.", "pages": 320, "category": "Purpose", "price": 21.99},
            {"title": "Faith That Moves Mountains", "slug": "faith-that-moves-mountains", "description": "Practical steps to activate supernatural faith.", "pages": 250, "category": "Faith", "price": 18.99},
            {"title": "Kingdom Business Mastery", "slug": "kingdom-business-mastery", "description": "God's blueprint for marketplace success.", "pages": 360, "category": "Business", "price": 24.99},
            {"title": "The Power of Declaration", "slug": "the-power-of-declaration", "description": "Master the art of prophetic declarations.", "pages": 190, "category": "Spiritual Warfare", "price": 16.99},
        ]

        products_added = []
        for book in book_data:
            # Digital version (free)
            digital = Product(
                name=book["title"],
                slug=book["slug"],
                description=book["description"],
                product_type=ProductType.BOOK_DIGITAL,
                price=0.00,
                is_active=True,
                author="Pastor David S. Okeke",
                pages=book["pages"],
                category=book["category"],
            )
            db.add(digital)
            products_added.append(book["title"] + " (Digital)")

            # Physical version (paid)
            physical = Product(
                name=f"{book['title']} (Physical)",
                slug=f"{book['slug']}-physical",
                description=f"Physical copy. {book['description']}",
                product_type=ProductType.BOOK_PHYSICAL,
                price=book["price"],
                is_active=True,
                requires_shipping=True,
                author="Pastor David S. Okeke",
                pages=book["pages"],
                category=book["category"],
                weight=0.5,
            )
            db.add(physical)
            products_added.append(book["title"] + " (Physical)")

        # Sample events
        events = [
            {"name": "Divinity Life Conference 2025", "slug": "divinity-life-conference-2025", "description": "Three days that will change your life forever.", "price": 50.00, "location": "Lagos, Nigeria", "venue": "Eko Convention Center"},
            {"name": "Global Leadership Summit 2025", "slug": "global-leadership-summit-2025", "description": "Empowering leaders to transform their spheres.", "price": 150.00, "location": "London, UK", "venue": "Excel London"},
        ]

        for event in events:
            product = Product(
                name=event["name"],
                slug=event["slug"],
                description=event["description"],
                product_type=ProductType.EVENT_TICKET,
                price=event["price"],
                is_active=True,
                event_location=event["location"],
                event_venue=event["venue"],
                max_attendees=10000,
            )
            db.add(product)
            products_added.append(event["name"])

        db.commit()

        return {"status": "success", "message": f"Added {len(products_added)} products", "products": products_added}

    except Exception as e:
        db.rollback()
        return {"status": "error", "message": str(e)}
    finally:
        db.close()


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=settings.DEBUG,
    )
