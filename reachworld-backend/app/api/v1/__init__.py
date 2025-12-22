from fastapi import APIRouter
from app.api.v1.endpoints import payments_router

api_router = APIRouter()

api_router.include_router(payments_router, prefix="/payments", tags=["payments"])

__all__ = ["api_router"]
