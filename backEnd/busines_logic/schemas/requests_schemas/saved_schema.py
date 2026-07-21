from pydantic import BaseModel


class SavedSchema(BaseModel):
    book_id: int
