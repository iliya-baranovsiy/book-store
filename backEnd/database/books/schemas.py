from decimal import Decimal
from pydantic import BaseModel, ConfigDict


class BookSchema(BaseModel):
    id: int
    title: str
    description: str
    author: str
    publisher: str
    language: str
    format: str
    rating: int
    cost: Decimal
    picture_url: str

    model_config = ConfigDict(
        from_attributes=True
    )


class BooksResponseSchema(BaseModel):
    items: list[BookSchema] | None
    total: int
    pages: int
