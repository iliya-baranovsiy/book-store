from pydantic import BaseModel
from database.books.dto.schemas import BookDetailSchema, BookBaseSchema


class BooksResponse(BaseModel):
    items: list[BookBaseSchema]
    pages: int


class BookDetailResponse(BaseModel):
    book: BookDetailSchema | None
    similar: list[BookBaseSchema] | None
