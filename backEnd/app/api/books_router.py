from fastapi import APIRouter, Query
from busines_logic.responses_schemas.book_responses import BooksResponse, BookDetailResponse
from busines_logic.services.book_service import BookService

router = APIRouter(prefix='/books')


@router.get("/", response_model=BooksResponse)
async def get_all_books(page: int = Query(default=1, ge=1)):
    books_service = BookService()
    books = await books_service.get_all_books(page=page)
    return books


@router.get("/{bookId}", response_model=BookDetailResponse)
async def get_book(book_id: int):
    books_service = BookService()
    book = await books_service.get_book(book_id=book_id)
    return book
