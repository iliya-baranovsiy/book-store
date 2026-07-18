from sqlalchemy.ext.asyncio.session import AsyncSession
from sqlalchemy.dialects.postgresql import insert
from sqlalchemy import select, exists
from .models import User
from .dto.schemas import DTOUserSchema


class UserOrm:

    @staticmethod
    async def add_user(session: AsyncSession, name: str, email: str, password: str):
        stmt = insert(User).values(name=name, email=email, password_hash=password)
        await session.execute(stmt)

    @staticmethod
    async def is_user_exists(session: AsyncSession, email: str):
        stmt = select(
            exists().where(User.email == email)
        )
        result = await session.execute(stmt)
        return result.scalar()

    @staticmethod
    async def get_user_data(session: AsyncSession, email: str):
        stmt = select(User).where(User.email == email)
        result = await session.execute(stmt)
        return DTOUserSchema.model_validate(result.scalar())

    @staticmethod
    async def is_user_exists_by_id(session: AsyncSession, id: int):
        stmt = select(
            exists().where(User.id == id)
        )
        res = await session.execute(stmt)
        return res
