from busines_logic.repositories.book_repositiry import BookRepository


class BookService:
    def __init__(self):
        self.book_repo = BookRepository()

    async def get_all_books(self, page: int):
        books = await self.book_repo.get_all_books(page=page)
        return books
