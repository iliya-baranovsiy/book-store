from sqlalchemy.ext.asyncio import AsyncSession
from database.users.orm import UserOrm
from database.engines import async_session
from ..entities.user_entity import User


class UserAuthRepository:
    def __init__(self, session: AsyncSession = None):
        self.orm = UserOrm()
        self.session = session if session else async_session()

    async def add_user(self, name: str, email: str, password: str):
        async with self.session as session:
            await self.orm.add_user(session=session, name=name, email=email, password=password)
            await self.session.commit()

    async def get_user_data(self, email: str) -> User | None:
        async with self.session as session:
            existing = await self.orm.is_user_exists(session=session, email=email)
            if existing:
                data = await self.orm.get_user_data(session=session, email=email)
                return User(id=data.id, name=data.name, email=data.email, hash_password=data.password_hash)
            return None
