from fastapi import APIRouter, Depends
from fastapi.responses import Response
from busines_logic.services.user_auth_service import UserAuthService
from busines_logic.schemas.requests_schemas.register_schemas import RegisterSchema
from busines_logic.schemas.requests_schemas.login_schema import LoginSchema
from config.configurations import settings
from app.depends.user_depend import get_current_user

router = APIRouter(prefix="/auth")


@router.get("/me")
async def get_me(user=Depends(get_current_user)):
    return user


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
        samesite="lax",
        path="/",
        max_age=60 * 60 * 24 * 7
    )
    response.status_code = 200


@router.post("/logout")
async def logout(response: Response):
    response.delete_cookie(
        key=settings.jwt_name,
        path="/",
        secure=False,
        httponly=True,
        samesite="lax"
    )
