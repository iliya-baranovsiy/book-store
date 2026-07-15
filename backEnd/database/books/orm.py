from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from sqlalchemy.orm import selectinload
from database.books.models import Book
from .schemas.schemas import BookListSchema, BookSchema


class BookOrm:

    @staticmethod
    async def get_books(session: AsyncSession, offset: int, limit: int):
        stmt = select(Book).options(selectinload(Book.authors)).limit(limit).offset(offset)
        result_row = await session.execute(stmt)
        if result_row:
            result = result_row.scalars().all()
            return [BookListSchema.model_validate(book) for book in result]
        else:
            return None

    @staticmethod
    async def get_all_books_count(session: AsyncSession):
        stmt = select(func.count()).select_from(Book)
        result = await session.execute(stmt)
        return result.scalars().first()

    @staticmethod
    async def get_book(session: AsyncSession, book_id: int):
        stmt = select(Book).where(Book.id == book_id)
        result = await session.execute(stmt)
        if result:
            return BookSchema.model_validate(result.scalars().first())
        else:
            return None

    @staticmethod
    async def get_similar_books(session: AsyncSession):
        stmt = select(Book).limit(9)
        result = await session.execute(stmt)
        if result:
            return [BookSchema.model_validate(book) for book in result.scalars().all()]
        else:
            return None
