import logging
import sys

# Configure logging first
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[logging.StreamHandler(sys.stdout)]
)
logger = logging.getLogger(__name__)

logger.info("Starting ReachWorld Nation API...")

try:
    logger.info("Importing FastAPI...")
    from fastapi import FastAPI
    from fastapi.middleware.cors import CORSMiddleware
    logger.info("FastAPI imported successfully")

    logger.info("Loading settings...")
    from app.core.config import settings
    logger.info(f"Settings loaded - APP_NAME: {settings.APP_NAME}, DEBUG: {settings.DEBUG}")
    logger.info(f"ALLOWED_ORIGINS: {settings.ALLOWED_ORIGINS}")

    logger.info("Importing API router...")
    from app.api.v1 import api_router
    logger.info("API router imported successfully")

    logger.info("Importing database...")
    from app.db import Base, engine
    logger.info("Database imported successfully")

    logger.info("Creating database tables...")
    Base.metadata.create_all(bind=engine)
    logger.info("Database tables created successfully")

except Exception as e:
    logger.error(f"STARTUP ERROR: {e}")
    import traceback
    logger.error(traceback.format_exc())
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
