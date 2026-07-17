from sqlalchemy.ext.asyncio.session import AsyncSession
from sqlalchemy.dialects.postgresql import insert
from .models import User


class UserOrm:

    @staticmethod
    async def add_user(session: AsyncSession, name: str, email: str, password: str):
        stmt = insert(User).values(name=name, email=email, password_hash=password)
        await session.execute(stmt)
