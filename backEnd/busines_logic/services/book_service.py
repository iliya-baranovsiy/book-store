from fastapi.responses import Response
from busines_logic.repositories.book_repositiry import BookRepository


class BookService:
    def __init__(self):
        self.book_repo = BookRepository()

    async def get_all_books(self, page: int, search_text: str = None):
        books = await self.book_repo.get_all_books(page=page, search_text=search_text)
        return books

    async def get_book(self, book_id):
        book = await self.book_repo.get_book(book_id=book_id)
        return book

    async def get_books_from_search(self, search_text: str):
        books = await self.book_repo.get_books_from_search(search_text=search_text)
        return books

    async def add_review(self, reviewer_id: int, book_id: int, review: str, rating: int):
        try:
            await self.book_repo.add_review(reviewer_id=reviewer_id, book_id=book_id, review=review, rating=rating)
            return Response(status_code=201)
        except:
            return Response(status_code=403)
