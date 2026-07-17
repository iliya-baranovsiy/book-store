from fastapi import APIRouter
from fastapi.responses import Response
from busines_logic.services.user_auth_service import UserAuthService
from busines_logic.schemas.requests_schemas.register_schemas import RegisterSchema
from busines_logic.schemas.requests_schemas.login_schema import LoginSchema
from config.configurations import settings

router = APIRouter(prefix="/auth")


@router.post("/register")
async def register(data: RegisterSchema):
    auth = UserAuthService()
    return await auth.create_user(name=data.name, email=data.email, password=data.password)


@router.post("/login")
async def login(data: LoginSchema, response: Response):
    auth = UserAuthService()
    token = await auth.login(email=data.email, password=data.password)
    response.set_cookie(
        key=settings.jwt_name,
        value=token,
        httponly=True,
        secure=False,
        samesite="lax"
    )
    response.status_code = 200
    return response
