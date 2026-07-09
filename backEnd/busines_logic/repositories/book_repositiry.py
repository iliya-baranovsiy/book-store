import math
from sqlalchemy.ext.asyncio import AsyncSession
from database.engines import async_session
from database.books.orm import BookOrm
from database.books.schemas import BooksResponseSchema


class BookRepository:
    def __init__(self, session: AsyncSession = None):
        self.book_orm = BookOrm()
        self.session = session if session else async_session()

    async def get_all_books(self, page: int):
        limit = 12
        offset = (page - 1) * limit
        async with self.session as session:
            books = await self.book_orm.get_books(session=session, offset=offset, limit=limit)
            books_count = await self.book_orm.get_all_books_count(session=session)
            return BooksResponseSchema(items=books, total=books_count, pages=math.ceil(books_count / limit))
