from sqlalchemy.ext.asyncio import AsyncSession
from database.users.orm import UserOrm
from database.engines import async_session


class UserAuthRepository:
    def __init__(self, session: AsyncSession = None):
        self.orm = UserOrm()
        self.session = session if session else async_session()

    async def add_user(self, name: str, email: str, password: str):
        async with self.session as session:
            await self.orm.add_user(session=session, name=name, email=email, password=password)
            await self.session.commit()
