from pydantic import BaseModel


class UpdateSchema(BaseModel):
    password: str
    new_password: str
