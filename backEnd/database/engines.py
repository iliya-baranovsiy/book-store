from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase
from config.configurations import settings

async_engine = create_async_engine(
    url=settings.db_url,
    echo=True,
    pool_size=10,
    max_overflow=20,
    pool_pre_ping=True,
    pool_recycle=300,
    connect_args={
        "statement_cache_size": 0
    }
)


class Base(DeclarativeBase):
    pass


async_session = async_sessionmaker(async_engine)
metadata_obj = Base.metadata
