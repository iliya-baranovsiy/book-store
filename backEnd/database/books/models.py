from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Text, Numeric, CheckConstraint, ForeignKey, Enum
from ..engines import Base
from .book_tags import Tags


class BookAuthor(Base):
    __tablename__ = "book_author"

    book_id: Mapped[int] = mapped_column(ForeignKey("books.id", ondelete="CASCADE"), primary_key=True)
    author_id: Mapped[int] = mapped_column(ForeignKey("authors.id", ondelete="CASCADE"), primary_key=True)


class Book(Base):
    __tablename__ = "books"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(256))
    description: Mapped[str] = mapped_column(Text)
    publisher: Mapped[str] = mapped_column(String(256))
    language: Mapped[str] = mapped_column(String(256))
    format: Mapped[str] = mapped_column(String(256))
    rating: Mapped[int]
    cost: Mapped[float] = mapped_column(Numeric(10, 2))
    picture_url: Mapped[str] = mapped_column(Text)
    tags: Mapped[Tags] = mapped_column(Enum(Tags))

    reviews: Mapped[list["Review"]] = relationship("Reviews", back_populates="book", cascade="all, delete-orphan")
    authors: Mapped[list["Author"]] = relationship(secondary=BookAuthor.__table__, back_populates="books")

    __table_args__ = (CheckConstraint("rating >= 0 AND rating <= 5",
                                      name="rating_range"),)


class Author(Base):
    __tablename__ = "authors"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(256))
    biography: Mapped[str] = mapped_column(Text)

    books: Mapped[list["Book"]] = relationship(secondary=BookAuthor.__table__, back_populates="authors")


class Review(Base):
    __tablename__ = "reviews"

    id: Mapped[int] = mapped_column(primary_key=True)
    book_id: Mapped[int] = mapped_column(ForeignKey("books.id"))
    reviewer_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    review: Mapped[str] = mapped_column(String(512))
    rating: Mapped[int]

    book: Mapped["Book"] = relationship("Book", back_populates="reviews")
    reviewer: Mapped["Users"] = relationship("Users", back_populates="reviews")

    __table_args__ = (CheckConstraint("rating >= 0 AND rating <= 5",
                                      name="rating_range_review"),)
