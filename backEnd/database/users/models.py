from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String
from ..engines import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(256))
    email: Mapped[str] = mapped_column(String(256), unique=True)
    password_hash: Mapped[str] = mapped_column(String(512))

    reviews: Mapped[list["Review"]] = relationship("Review", back_populates="reviewer")
