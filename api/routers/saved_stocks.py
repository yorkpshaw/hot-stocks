from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel

from queries.saved_stocks import SavedStockQueries

router = APIRouter()


class SavedStockIn(BaseModel):
    user_id: int
    symbol: str
    preference: bool


class SavedStockOut(BaseModel):
    id: int
    user_id: int
    symbol: str
    preference: bool


class SavedStocksOut(BaseModel):
    stocks: list[SavedStockOut]


@router.get("/api/stocks", response_model=SavedStocksOut)
def get_all_saved_stocks(queries: SavedStockQueries = Depends()):
    return {
        "stocks": queries.get_all_saved_stocks(),
    }


@router.post("/api/stocks/", response_model=SavedStockOut)
def create_saved_stock(stock_in: SavedStockIn, queries: SavedStockQueries = Depends()):
    return queries.create_saved_stock(stock_in)


@router.delete("/api/stocks/{stock_id}", response_model=bool)
def delete_saved_stock(stock_id: int, queries: SavedStockQueries = Depends()):
    queries.delete_saved_stock(stock_id)
    return True
