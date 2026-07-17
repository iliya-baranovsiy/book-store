from fastapi import APIRouter
from busines_logic.services.user_auth_service import UserAuthService
from busines_logic.schemas.requests_schemas.register_schemas import RegisterSchema

router = APIRouter(prefix="/auth")


@router.post("/register")
async def register(data: RegisterSchema):
    auth = UserAuthService()
    return await auth.create_user(name=data.name, email=data.email, password=data.password)
