from fastapi import APIRouter, Depends
from database.users.dto.schemas import DTOUserSchema
from app.depends.user_depend import get_user_main_data
from busines_logic.schemas.requests_schemas.update_schema import UpdateSchema
from busines_logic.services.user_service import UserService

router = APIRouter(prefix="/user")


@router.get("/profile", response_model=DTOUserSchema)
async def get_user_profile(user_data=Depends(get_user_main_data)):
    return user_data


@router.patch("/profile")
async def patch_profile(data: UpdateSchema, user_data=Depends(get_user_main_data)):
    service = UserService()
    return await service.update_password(id=user_data.id, email=user_data.email, password=data.password,
                                         new_password=data.new_password)
