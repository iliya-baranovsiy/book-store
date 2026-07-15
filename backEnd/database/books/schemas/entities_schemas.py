from pydantic import BaseModel

class AuthorSchema(BaseModel):
    id: int
    name: str
    biography: str


class TagSchema(BaseModel):
    id: int
    tag: str


class ReviewSchema(BaseModel):
    id: int
    book_id: int
    reviewer_id: int
    review: str
    rating: int