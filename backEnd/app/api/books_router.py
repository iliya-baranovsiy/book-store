from fastapi import APIRouter, Query
from database.books.schemas import BookSchema
from busines_logic.services.book_service import BookService

router = APIRouter(prefix='/books')


@router.get("/", response_model=list[BookSchema])
async def get_all_books(page: int = Query(default=1, ge=1)):
    books_service = BookService()
    books = await books_service.get_all_books(page=page)
    return books
