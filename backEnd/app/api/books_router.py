from typing import Optional
from fastapi import APIRouter, Query, Depends
from busines_logic.schemas.responses_schemas.book_responses import BooksResponse, BookDetailResponse, BookShortResponse
from busines_logic.services.book_service import BookService
from app.depends.user_depend import get_user_main_data
from busines_logic.schemas.requests_schemas.review_schema import ReviewSchema

router = APIRouter(prefix='/books')


@router.get("/", response_model=BooksResponse)
async def get_all_books(page: int = Query(default=1, ge=1), q: Optional[str] = Query(default=None, min_length=1)):
    books_service = BookService()
    books = await books_service.get_all_books(page=page, search_text=q)
    return books


@router.get("/search", response_model=BookShortResponse)
async def get_from_search(q: str = Query(..., min_length=1)):
    books_service = BookService()
    books = await books_service.get_books_from_search(search_text=q)
    return books


@router.get("/{bookId}", response_model=BookDetailResponse)
async def get_book(book_id: int):
    books_service = BookService()
    book = await books_service.get_book(book_id=book_id)
    return book


@router.post("/review")
async def add_review(review: ReviewSchema, user_data=Depends(get_user_main_data)):
    books_service = BookService()
    response = await books_service.add_review(reviewer_id=user_data.id, book_id=review.book_id, review=review.review,
                                   rating=review.rating)
    return response