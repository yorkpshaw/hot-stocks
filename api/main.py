from fastapi import FastAPI
from routers import users, saved_items

app = FastAPI()


app.include_router(users.router)
app.include_router(saved_items.router)
