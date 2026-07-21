from sqlalchemy.ext.asyncio import AsyncSession
from database.users.orm import UserOrm
from database.engines import async_session


class UserRepository:
    def __init__(self, session: AsyncSession = None):
        self.orm = UserOrm()
        self.session = session if session else async_session()

    async def get_main_user_data(self, id: int):
        async with self.session as session:
            user_data = await self.orm.get_user(session=session, id=id)
            return user_data

    async def update_password(self, id: int, password: str):
        async with self.session as session:
            await self.orm.update_user_password(session=session, password=password, id=id)
            await session.commit()

    async def get_saved(self, user_id: int):
        async with self.session as session:
            books = await self.orm.get_saved(session=session, user_id=user_id)
            return books

    async def add_to_saved(self, book_id: int, user_id: int):
        async with self.session as session:
            await self.orm.add_saved(session=session, book_id=book_id, user_id=user_id)
            await session.commit()

    async def delete_from_saved(self, book_id: int, user_id: int):
        async with self.session as session:
            await self.orm.delete_from_saved(session=session, book_id=book_id, user_id=user_id)
            await session.commit()
