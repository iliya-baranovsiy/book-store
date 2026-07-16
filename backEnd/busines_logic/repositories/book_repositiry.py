import math
from sqlalchemy.ext.asyncio import AsyncSession
from database.engines import async_session
from database.books.orm import BookOrm
from ..responses_schemas.book_responses import BooksResponse, BookDetailResponse, BookShortResponse


class BookRepository:
    def __init__(self, session: AsyncSession = None):
        self.book_orm = BookOrm()
        self.session = session if session else async_session()

    async def get_all_books(self, page: int, search_text: str = None):
        limit = 12
        offset = (page - 1) * limit
        async with self.session as session:
            books = await self.book_orm.get_books(session=session, offset=offset, limit=limit, search_text=search_text)
            books_count = await self.book_orm.get_all_books_count(session=session, search_text=search_text)
            return BooksResponse(items=books, pages=math.ceil(books_count / limit))

    async def get_book(self, book_id):
        try:
            async with self.session as session:
                book = await self.book_orm.get_book(session=session, book_id=book_id)
                similar = await self.book_orm.get_similar_books(session=session, book_id=book_id)
                return BookDetailResponse(book=book, similar=similar)
        except:
            return None

    async def get_books_from_search(self, search_text):
        try:
            async with self.session as session:
                books = await self.book_orm.get_books_from_search(search_text=search_text, session=session)
                return BookShortResponse(items=books)
        except:
            return None
