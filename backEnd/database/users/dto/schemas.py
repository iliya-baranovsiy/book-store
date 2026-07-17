from pydantic import BaseModel, ConfigDict


class DTOUserSchema(BaseModel):
    id: int
    name: str
    email: str
    password_hash: str

    model_config = ConfigDict(
        from_attributes=True
    )
