from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import List
from queries.portfolio_stocks import PortfolioStocksQueries

router = APIRouter()

class PortfolioIn(BaseModel):
    user_id: int
    stock_id: int
    num_shares: int
    cost_basis: int

class PortfolioOut(BaseModel):
    id: int
    user_id: int
    stock_id: int
    num_shares: int
    cost_basis: int

class PortfolioListOut(BaseModel):
    portfolio_stocks: List[PortfolioOut]


@router.post("/api/portfolio_stocks/", response_model = PortfolioOut)
def create_portfolio_item(
    portfolio_stocks: PortfolioIn,
    queries: PortfolioStocksQueries = Depends()):
    return {
        "portfolio_stocks": queries.create_portfolio_item(),
    }

@router.get("/api/portfolio_stocks", response_model = List[PortfolioListOut])
def portfolio_list(queries: PortfolioStocksQueries = Depends()):
    return {
        "portfolio_stocks": queries.get_all_portfolio_items(),
    }

@router.put("api/portfolio_stocks/`<int:id>`/", response_model = PortfolioOut)
def portfolio_item_edit(queries: PortfolioStocksQueries = Depends()):
    return {
        "portfolio_stocks": queries.update_portfolio_item(),
    }
