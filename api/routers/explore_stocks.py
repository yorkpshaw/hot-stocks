from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel

from queries.explore_stocks import ExploreStockQueries

router = APIRouter()


class ExploreStockIn(BaseModel):
    symbol: str
    company_name: str
    company_description: str


class ExploreStockOut(BaseModel):
    id: int
    symbol: str
    company_name: str
    company_description: str


class ExploreStockExplore(BaseModel):
    id: int
    symbol: str
    company_name: str


class ExploreStockDetail(ExploreStockOut):
    pass


class ExploreStocksExplore(BaseModel):
    stocks: list[ExploreStockExplore]


@router.get("/api/explore_items/stocks", response_model=ExploreStocksExplore)
def get_all_explore_stocks(queries: ExploreStockQueries = Depends()):
    return {
        "stocks": queries.get_all_explore_stocks(),
    }


@router.get("/api/explore_items/stocks/{stock_id}", response_model=ExploreStockDetail)
def get_explore_stock(
    stock_id: int,
    response: Response,
    queries: ExploreStockQueries = Depends(),
):
    record = queries.get_explore_stock(stock_id)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.post("/api/explore_items/stocks/", response_model=ExploreStockOut)
def create_explore_stock(stock_in: ExploreStockIn, queries: ExploreStockQueries = Depends()):
    return queries.create_explore_stock(stock_in)


@router.put("/api/explore_items/stocks/{stock_id}", response_model=ExploreStockOut)
def update_explore_stock(
    stock_id: int,
    stock_in: ExploreStockIn,
    response: Response,
    queries: ExploreStockQueries = Depends(),
):
    record = queries.update_explore_stock(stock_id, stock_in)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.delete("/api/explore_items/stocks/{stock_id}", response_model=bool)
def delete_stock(stock_id: int, queries: ExploreStockQueries = Depends()):
    queries.delete_explore_stock(stock_id)
    return True
