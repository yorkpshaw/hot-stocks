from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from authenticator import authenticator
from routers import accounts, portfolio_stocks, saved_news_items, saved_stocks
from routers.external import external

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(authenticator.router)
app.include_router(accounts.router)
app.include_router(portfolio_stocks.router)
app.include_router(saved_news_items.router)
app.include_router(saved_stocks.router)
app.include_router(external.router)
