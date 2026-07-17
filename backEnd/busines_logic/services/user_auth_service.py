from fastapi.exceptions import HTTPException
from fastapi.responses import Response
from ..repositories.user_auth_repository import UserAuthRepository
from core.auth.hash_password import Hashing
from core.auth.jwt import JWT


class UserAuthService:
    def __init__(self):
        self._auth_repo = UserAuthRepository()
        self._hashing = Hashing()
        self.jwt = JWT()

    async def create_user(self, name: str, email: str, password: str):
        try:
            hash_password = self._hashing.to_hash(password=password)
            await self._auth_repo.add_user(name=name, email=email, password=hash_password)
            return Response(status_code=201)
        except Exception as e:
            raise HTTPException(status_code=409)

    async def login(self, email: str, password: str):
        user = await self._auth_repo.get_user_data(email=email)
        if user:
            verify = self._hashing.is_identical(password=password, db_password=user.hash_password)
            if verify:
                return self.jwt.create_token(user_id=str(user.id))
            else:
                raise HTTPException(status_code=401, detail="Invalid email or password")
        else:
            raise HTTPException(status_code=401, detail="Invalid email or password")
