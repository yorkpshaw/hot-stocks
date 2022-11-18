from fastapi import FastAPI

from authenticator import authenticator
from routers import accounts, portfolio_stocks, saved_items, saved_news_items, saved_stocks
from routers.external import alphavantage

app = FastAPI()

app.include_router(authenticator.router)
app.include_router(accounts.router)
# app.include_router(users.router)
app.include_router(portfolio_stocks.router)
app.include_router(saved_items.router)
app.include_router(saved_news_items.router)
app.include_router(saved_stocks.router)
app.include_router(alphavantage.router)
