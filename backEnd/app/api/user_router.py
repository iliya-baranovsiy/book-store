from fastapi import APIRouter, Depends, status
from database.users.dto.schemas import DTOUserSchema
from app.depends.user_depend import get_user_main_data
from busines_logic.schemas.requests_schemas.update_schema import UpdateSchema
from busines_logic.services.user_service import UserService
from busines_logic.schemas.responses_schemas.book_responses import SavedBooksResponse

router = APIRouter(prefix="/user")


@router.get("/profile", response_model=DTOUserSchema)
async def get_user_profile(user_data=Depends(get_user_main_data)):
    return user_data


@router.patch("/profile")
async def patch_profile(data: UpdateSchema, user_data=Depends(get_user_main_data)):
    service = UserService()
    return await service.update_password(id=user_data.id, email=user_data.email, password=data.password,
                                         new_password=data.new_password)


@router.get("/saved", response_model=SavedBooksResponse)
async def get_saved(user_data=Depends(get_user_main_data)):
    service = UserService()
    books = await service.get_saved(user_id=user_data.id)
    return books


@router.post("/saved", status_code=status.HTTP_201_CREATED)
async def add_saved(book_id: int, user_data=Depends(get_user_main_data)):
    service = UserService()
    await service.add_saved(book_id=book_id, user_id=user_data.id)
    return {"ok": "okey"}


@router.delete("/saved", status_code=status.HTTP_204_NO_CONTENT)
async def delete_from_saved(book_id: int, user_data=Depends(get_user_main_data)):
    service = UserService()
    await service.delete_from_saved(book_id=book_id, user_id=user_data.id)
