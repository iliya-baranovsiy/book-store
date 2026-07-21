from sqlalchemy.ext.asyncio.session import AsyncSession
from sqlalchemy.dialects.postgresql import insert
from sqlalchemy.orm import selectinload
from sqlalchemy import select, exists, update, delete
from .models import User, Saved
from .dto.schemas import DTOUserLoginSchema, DTOUserSchema
from ..books.models import Book


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
        return DTOUserLoginSchema.model_validate(result.scalar())

    @staticmethod
    async def is_user_exists_by_id(session: AsyncSession, id: int):
        stmt = select(
            exists().where(User.id == id)
        )
        res = await session.execute(stmt)
        return res

    @staticmethod
    async def get_user(session: AsyncSession, id: int):
        stmt = select(User).where(User.id == id)
        res = await session.execute(stmt)
        return DTOUserSchema.model_validate(res.scalars().first())

    @staticmethod
    async def update_user_password(session: AsyncSession, id: int, password: str):
        stmt = update(User).values(password_hash=password).where(User.id == id)
        await session.execute(stmt)

    @staticmethod
    async def get_saved(session: AsyncSession, user_id: int):
        stmt = select(User).options(selectinload(User.saved_books).selectinload(Book.authors)).where(User.id == user_id)
        res = await session.execute(stmt)
        return res.scalar().saved_books

    @staticmethod
    async def add_saved(session: AsyncSession, user_id: int, book_id: int):
        stmt = insert(Saved).values(book_id=book_id, user_id=user_id)
        await session.execute(stmt)

    @staticmethod
    async def delete_from_saved(session: AsyncSession, user_id: int, book_id: int):
        stmt = delete(Saved).where(Saved.user_id == user_id, Saved.book_id == book_id)
        await session.execute(stmt)
