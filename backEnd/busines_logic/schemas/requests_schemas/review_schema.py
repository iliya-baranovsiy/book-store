from pydantic import BaseModel


class ReviewSchema(BaseModel):
    book_id: int
    review: str
    rating: int
