from busines_logic.repositories.book_repositiry import BookRepository


class BookService:
    def __init__(self):
        self.book_repo = BookRepository()

    async def get_all_books(self, page: int):
        books = await self.book_repo.get_all_books(page=page)
        return books

    async def get_book(self, book_id):
        book = await self.book_repo.get_book(book_id=book_id)
        return book

    async def get_books_from_search(self, search_text: str):
        books = await self.book_repo.get_books_from_search(search_text=search_text)
        return books
