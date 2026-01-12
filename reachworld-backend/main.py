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


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=settings.DEBUG,
    )
