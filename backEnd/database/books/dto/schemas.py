from decimal import Decimal
from pydantic import BaseModel, ConfigDict
from database.books.dto import AuthorSchema, TagSchema, ReviewSchema


class BookBaseSchema(BaseModel):
    id: int
    title: str
    description: str
    authors: list[AuthorSchema]
    publisher: str
    language: str
    format: str
    rating: int
    cost: Decimal
    picture_url: str

    model_config = ConfigDict(
        from_attributes=True
    )


class BookDetailSchema(BookBaseSchema):
    tags: list[TagSchema]
    reviews: list[ReviewSchema]

    model_config = ConfigDict(
        from_attributes=True
    )


"""class BooksResponseSchema(BaseModel):
    items: list[BookSchema] | None
    total: int
    pages: int


class BookResponseSchema(BaseModel):
    book: BookSchema | None
    similar: list[BookSchema] | None"""
