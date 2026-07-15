from pydantic import BaseModel, ConfigDict


class BaseConfigSchema(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )


class AuthorSchema(BaseConfigSchema):
    id: int
    name: str
    biography: str


class TagSchema(BaseConfigSchema):
    id: int
    tag: str


class ReviewSchema(BaseConfigSchema):
    id: int
    book_id: int
    reviewer_id: int
    review: str
    rating: int
