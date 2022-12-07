from fastapi import APIRouter, Depends
from .authenticator import authenticator
from queries.saved_stocks import (
    SavedStockIn,
    SavedStockOut,
    SavedStockQueries,
)


router = APIRouter()


@router.get("/api/saved_stocks")  # , response_model = SavedStocksOut)
def get_all_saved_stocks(
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: SavedStockQueries = Depends(),
):
    account_id = account_data["id"]

    return {
        "saved_stocks": queries.get_all_saved_stocks(account_id),
    }


@router.post("/api/saved_stocks/", response_model=SavedStockOut)
def create_or_update_saved_stock(
    stock_in: SavedStockIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: SavedStockQueries = Depends(),
):
    account_id = account_data["id"]
    return queries.create_or_update_saved_stock(stock_in, account_id)


@router.delete("/api/saved_stocks/{saved_stock_id}", response_model=bool)
def delete_saved_stock(
    saved_stock_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: SavedStockQueries = Depends(),
):
    account_id = account_data["id"]
    queries.delete_saved_stock(saved_stock_id, account_id)
    return True
