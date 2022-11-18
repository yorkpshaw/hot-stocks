from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel
from typing import List
from queries.portfolio_stocks import PortfolioStocksQueries

router = APIRouter()


class PortfolioStockIn(BaseModel):
    user_id: int
    symbol: str
    num_shares: int
    cost_basis: int


class PortfolioStockOut(BaseModel):
    id: int
    user_id: int
    symbol: str
    num_shares: int
    cost_basis: int


class PortfolioListOut(BaseModel):
    portfolio_stocks: List[PortfolioStockOut]


@router.post("/api/portfolio_stocks/", response_model=PortfolioOut)
def create_portfolio_item(
    portfolio_stocks: PortfolioIn, queries: PortfolioStocksQueries = Depends()
):
    return {
        "portfolio_stocks": queries.create_portfolio_item(),
    }


@router.get("/api/portfolio_stocks", response_model=List[PortfolioListOut])
def portfolio_list(queries: PortfolioStocksQueries = Depends()):
    return {
        "portfolio_stocks": queries.get_all_portfolio_stocks(user_id),
    }


@router.post("/api/portfolio_stocks/", response_model=PortfolioStockOut)
def create_portfolio_stock(
    portfolio_stock_in: PortfolioStockIn,
    user_id: int,
    queries: PortfolioStocksQueries = Depends(),
):
    return queries.create_portfolio_stock(portfolio_stock_in, user_id)


@router.put(
    "api/portfolio_stocks/{portfolio_stock_id}/", response_model=PortfolioStockOut
)
def update_portfolio_stock(
    portfolio_stock_id: int,
    portfolio_stock_in: PortfolioStockIn,
    response: Response,
    queries: PortfolioStocksQueries = Depends(),
):
    record = queries.update_portfolio_stock(portfolio_stock_id, portfolio_stock_in)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.delete("/api/portfolio_stocks/{portfolio_stock_id}", response_model=bool)
def delete_portfolio_stock(
    portfolio_stock_id: int, queries: PortfolioStocksQueries = Depends()
):
    queries.delete_portfolio_stock(portfolio_stock_id)
    return True
