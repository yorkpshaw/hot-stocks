from fastapi import APIRouter, Depends
from .authenticator import authenticator
from queries.portfolio_stocks import (
    PortfolioStockIn,
    PortfolioStockOut,
    PortfolioStocksOut,
    PortfolioStockQueries,
)


router = APIRouter()


@router.get("/api/portfolio_stocks", response_model=PortfolioStocksOut)
def get_all_portfolio_stocks(
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PortfolioStockQueries = Depends(),
):
    account_id = account_data["id"]

    return {
        "portfolio_stocks": queries.get_all_portfolio_stocks(account_id),
    }


@router.post("/api/portfolio_stocks/", response_model=PortfolioStockOut)
def create_or_update_portfolio_stock(
    portfolio_stock_in: PortfolioStockIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PortfolioStockQueries = Depends(),
):
    account_id = account_data["id"]

    return queries.create_or_update_portfolio_stock(
        portfolio_stock_in, account_id)


@router.delete(
    "/api/portfolio_stocks/{portfolio_stock_id}", response_model=bool
)
def delete_portfolio_stock(
    portfolio_stock_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: PortfolioStockQueries = Depends(),
):
    account_id = account_data["id"]

    queries.delete_portfolio_stock(portfolio_stock_id, account_id)
    return True
