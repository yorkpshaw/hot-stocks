from fastapi import FastAPI, Depends
from routers import (
    users,
    saved_news_items,
    saved_stocks,
    saved_items,
    portfolio_stocks,
    accounts,
)
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from typing import Union
from authenticator import authenticator

app = FastAPI()

app.include_router(authenticator.router)
app.include_router(accounts.router)

app.include_router(users.router)
app.include_router(saved_news_items.router)
app.include_router(saved_stocks.router)
app.include_router(saved_items.router)
app.include_router(portfolio_stocks.router)

oath2_scheme = OAuth2PasswordBearer(tokenUrl="token")


@app.get("/users/")
async def read_items(token: str = Depends(oauth2_scheme)):
    return {"token": token}


class User(BaseModel):
    username: str
    email: Union[str, None] = None
    full_name: Union[str, None] = None
    disabled: Union[bool, None] = None
