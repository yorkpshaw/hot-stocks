from fastapi import FastAPI
from routers import users, explore_items, news_items, stocks, portfolio_stocks, saved_items

app = FastAPI()


app.include_router(users.router)
app.include_router(explore_items.router)
app.include_router(news_items.router)
app.include_router(stocks.router)
app.include_router(portfolio_stocks.router)
app.include_router(saved_items.router)
