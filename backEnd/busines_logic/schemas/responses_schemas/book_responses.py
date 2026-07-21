from pydantic import BaseModel, ConfigDict
from database.books.dto.schemas import BookDetailSchema, BookBaseSchema, BookShortSchema


class BooksResponse(BaseModel):
    items: list[BookBaseSchema]
    pages: int


class BookDetailResponse(BaseModel):
    book: BookDetailSchema | None
    similar: list[BookBaseSchema] | None


class BookShortResponse(BaseModel):
    items: list[BookShortSchema] | None


class SavedBooksResponse(BaseModel):
    books: list[BookBaseSchema]

    model_config = ConfigDict(from_attributes=True)
