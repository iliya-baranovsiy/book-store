from fastapi.exceptions import HTTPException
from fastapi.responses import Response
from ..repositories.user_auth_repository import UserAuthRepository
from core.auth.hash_password import Hashing


class UserAuthService:
    def __init__(self):
        self._auth_repo = UserAuthRepository()
        self._hashing = Hashing()

    async def create_user(self, name: str, email: str, password: str):
        try:
            hash_password = self._hashing.to_hash(password=password)
            await self._auth_repo.add_user(name=name, email=email, password=hash_password)
            return Response(status_code=201)
        except Exception as e:
            print(e)
            raise HTTPException(status_code=409)
