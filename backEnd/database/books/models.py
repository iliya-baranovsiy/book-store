from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Text, Numeric, CheckConstraint
from ..engines import Base


class Book(Base):
    __tablename__ = "books"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(256))
    description: Mapped[str] = mapped_column(Text)
    author: Mapped[str] = mapped_column(String(256))
    publisher: Mapped[str] = mapped_column(String(256))
    language: Mapped[str] = mapped_column(String(256))
    format: Mapped[str] = mapped_column(String(256))
    rating: Mapped[int]
    cost: Mapped[float] = mapped_column(Numeric(10, 2))
    picture_url: Mapped[str] = mapped_column(Text)

    __table_args__ = (CheckConstraint("rating >= 0 AND rating <= 5",
                                      name="rating_range"),)
