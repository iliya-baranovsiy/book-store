from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from database.books.models import Book
from .schemas import BookSchema


class BookOrm:

    @staticmethod
    async def get_books(session: AsyncSession, offset: int, limit: int):
        stmt = select(Book).limit(limit).offset(offset)
        result_row = await session.execute(stmt)
        if result_row:
            result = result_row.scalars().all()
            return [BookSchema.model_validate(book) for book in result]
        else:
            return None
