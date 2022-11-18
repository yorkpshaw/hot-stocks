from fastapi import FastAPI
from routers import users, saved_news_items, saved_stocks, saved_items, portfolio_stocks

app = FastAPI()


app.include_router(users.router)
app.include_router(saved_news_items.router)
app.include_router(saved_stocks.router)
app.include_router(saved_items.router)
app.include_router(portfolio_stocks.router)
