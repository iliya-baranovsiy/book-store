from database.engines import async_session
from database.books.orm import BookOrm


class BookRepository:
    def __init__(self):
        self.book_orm = BookOrm()
        self.session = async_session()

    async def get_all_books(self, page: int):
        offset = page * 12
        async with self.session as session:
            res = await self.book_orm.get_books(session=session, offset=offset)
            return res
