from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from .api import router

app = FastAPI(
    title="Books API",
    version="1.0.0"
)
app.mount(
    "/uploads",
    StaticFiles(directory="app/uploads"),
    name="uploads"
)

app.include_router(router)
