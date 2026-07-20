from fastapi import APIRouter
from .books_router import router as books_router
from .auth_router import router as auth_router
from .user_router import router as user_router

router = APIRouter(prefix='/api')
router.include_router(router=books_router)
router.include_router(router=auth_router)
router.include_router(router=user_router)
