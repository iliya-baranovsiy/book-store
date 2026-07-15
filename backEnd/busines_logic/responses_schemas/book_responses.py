from pydantic import BaseModel
from database.books.dto.schemas import BookBaseSchema


class BooksResponse(BaseModel):
    items: list[BookBaseSchema]
    pages: int
