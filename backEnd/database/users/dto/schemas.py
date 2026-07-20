from pydantic import BaseModel, ConfigDict


class DTOUserLoginSchema(BaseModel):
    id: int
    name: str
    email: str
    password_hash: str

    model_config = ConfigDict(
        from_attributes=True
    )


class DTOUserSchema(BaseModel):
    id: int
    name: str
    email: str

    model_config = ConfigDict(
        from_attributes=True
    )
