from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel

from queries.stocks import StockQueries

router = APIRouter()


class StockIn(BaseModel):
    symbol: str
    company_name: str
    company_description: str


class StockOut(BaseModel):
    id: int
    symbol: str
    company_name: str
    company_description: str


class StockExplore(BaseModel):
    id: int
    symbol: str
    company_name: str


class StockDetail(StockOut):
    pass


class StocksExplore(BaseModel):
    stocks: list[StockExplore]


@router.get("/api/stocks", response_model=StocksExplore)
def get_all_stocks(queries: StockQueries = Depends()):
    return {
        "stocks": queries.get_all_stocks(),
    }


@router.get("/api/stocks/{stock_id}", response_model=StockDetail)
def get_stock(
    stock_id: int,
    response: Response,
    queries: StockQueries = Depends(),
):
    record = queries.get_stock(stock_id)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.post("/api/stocks/", response_model=StockOut)
def create_stock(stock_in: StockIn, queries: StockQueries = Depends()):
    return queries.create_stock(stock_in)


@router.put("/api/stocks/{stock_id}", response_model=StockOut)
def update_stock(
    stock_id: int,
    stock_in: StockIn,
    response: Response,
    queries: StockQueries = Depends(),
):
    record = queries.update_stock(stock_id, stock_in)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.delete("/api/stocks/{stock_id}", response_model=bool)
def delete_stock(stock_id: int, queries: StockQueries = Depends()):
    queries.delete_stock(stock_id)
    return True
