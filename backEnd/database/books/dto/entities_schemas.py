from pydantic import BaseModel, ConfigDict
from pydantic.alias_generators import to_camel


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


class ReviewerSchema(BaseModel):
    id: int
    name: str
    email: str

    model_config = ConfigDict(
        from_attributes=True
    )


class ReviewSchema(BaseModel):
    id: int
    book_id: int
    reviewer: ReviewerSchema
    review: str
    rating: int

    model_config = ConfigDict(
        from_attributes=True,
        alias_generator=to_camel,
        populate_by_name=True
    )
