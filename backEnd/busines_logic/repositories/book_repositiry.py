from sqlalchemy.ext.asyncio import AsyncSession
from database.engines import async_session
from database.books.orm import BookOrm


class BookRepository:
    def __init__(self, session: AsyncSession = None):
        self.book_orm = BookOrm()
        self.session = session if session else async_session()

    async def get_all_books(self, page: int):
        limit = 12
        offset = (page - 1) * limit
        async with self.session as session:
            res = await self.book_orm.get_books(session=session, offset=offset, limit=limit)
            return res
