from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from sqlalchemy.orm import selectinload
from database.books.models import Book, BookTag
from .dto.schemas import BookBaseSchema, BookDetailSchema, BookShortSchema


class BookOrm:

    @staticmethod
    async def get_books(session: AsyncSession, offset: int, limit: int):
        stmt = select(Book).options(selectinload(Book.authors)).limit(limit).offset(offset)
        result_row = await session.execute(stmt)
        if result_row:
            result = result_row.scalars().all()
            return [BookBaseSchema.model_validate(book) for book in result]
        else:
            return None

    @staticmethod
    async def get_all_books_count(session: AsyncSession):
        stmt = select(func.count()).select_from(Book)
        result = await session.execute(stmt)
        return result.scalars().first()

    @staticmethod
    async def get_book(session: AsyncSession, book_id: int):
        stmt = select(Book).options(
            selectinload(Book.authors),
            selectinload(Book.reviews),
            selectinload(Book.tags)
        ).where(Book.id == book_id)
        result = await session.execute(stmt)
        if result:
            return BookDetailSchema.model_validate(result.scalars().first())
        else:
            return None

    @staticmethod
    async def get_similar_books(session: AsyncSession, book_id: int):
        subquery = select(BookTag.tag_id).where(BookTag.book_id == book_id)
        stmt = select(Book, func.count(BookTag.tag_id).label("score")).join(BookTag).where(
            BookTag.tag_id.in_(subquery)).where(
            Book.id != book_id
        ).group_by(Book.id).order_by(func.count(BookTag.tag_id).desc(), Book.rating.desc()).limit(9).options(
            selectinload(Book.authors)
        )
        result = await session.execute(stmt)
        books = result.scalars().all()
        if not books:
            stmt = (
                select(Book)
                .where(Book.id != book_id)
                .order_by(Book.rating.desc())
                .limit(9)
                .options(
                    selectinload(Book.authors),
                )
            )
            result = await session.execute(stmt)
            books = result.scalars().all()
        return [BookBaseSchema.model_validate(book) for book in books]

    @staticmethod
    async def get_books_from_search(session: AsyncSession, search_text: str):
        stmt = select(Book.id, Book.title, Book.picture_url).where(Book.title.ilike(f"%{search_text}%")).limit(3)
        result = await session.execute(stmt)
        if result:
            return [BookShortSchema.model_validate(book) for book in result.all()]
        return None
