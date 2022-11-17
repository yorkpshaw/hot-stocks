from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel
from datetime import date
from typing import List
from queries.explore_items import ExploreItemsQueries
import requests

router = APIRouter()

class News(BaseModel):
    title: str
    posted_date: date
    description: str

class Stock(BaseModel):
    symbol: str
    name: str
    description: str

@router.get("/explore_items/news_items/{news_id}/", response_model=News)
def news_details(
    id: int,
    response = Response,
    repo: ExploreItemsQueries = Depends(),
) -> News:
    response.status_code = 404
    return repo.get_explore_item(News)


@router.get("/explore_items/stocks/{stock_id}/", response_model=Stock)
def stock_details(id: int, stock: Stock):
    pass


# Get single news item (title, posted_date, description)
# Get single stock detail (symbol, name, description)

# Stock card
# url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo'
# r = requests.get(url)
# data = r.json()
# print(data)

# News card
# url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&topics=technology&apikey=demo'
# r = requests.get(url)
# data = r.json()
# print(data)

# Company summary card
# url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo'
# r = requests.get(url)
# data = r.json()
# print(da
