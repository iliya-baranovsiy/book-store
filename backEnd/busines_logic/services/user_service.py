from busines_logic.repositories.user_repository import UserRepository
from busines_logic.repositories.user_auth_repository import UserAuthRepository
from core.auth.hash_password import Hashing
from fastapi.exceptions import HTTPException
from fastapi.responses import Response


class UserService:
    def __init__(self):
        self._user_repo = UserRepository()
        self._auth_repo = UserAuthRepository()
        self._hashing = Hashing()

    async def get_user_main_data(self, id: int):
        user_data = await self._user_repo.get_main_user_data(id=id)
        return user_data

    async def update_password(self, id: int, password: str, new_password, email: str):
        user_data = await self._auth_repo.get_user_data(email=email)
        if user_data:
            verify = self._hashing.is_identical(password=password, db_password=user_data.hash_password)
            if verify:
                await self._user_repo.update_password(id=id, password=self._hashing.to_hash(new_password))
                return Response(status_code=200)
            else:
                raise HTTPException(status_code=401, detail="Invalid email or password")
