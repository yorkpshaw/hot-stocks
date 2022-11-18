from fastapi import APIRouter, Depends

# from authenticator import authenticator
from queries.saved_stocks import (
    SavedStockIn,
    SavedStockOut,
    SavedStocksOut,
    SavedStockQueries,
)


router = APIRouter()

@router.get("/api/saved_stocks", response_model=SavedStocksOut)
def get_all_saved_stocks(
    # account_id: int = Depends(authenticator.get_current_account_data)['account']['id'],
    account_id: int,
    queries: SavedStockQueries = Depends()
    ):
    return {
        "stocks": queries.get_all_saved_stocks(account_id),
    }


@router.post("/api/saved_stocks/", response_model=SavedStockOut)
def create_saved_stock(
    # account_id: int = Depends(authenticator.get_current_account_data)['account']['id'],
    stock_in: SavedStockIn,
    account_id: int,
    queries: SavedStockQueries = Depends()
    ):
    return queries.create_saved_stock(stock_in, account_id)


@router.delete("/api/saved_stocks/{saved_stock_id}", response_model=bool)
def delete_saved_stock(
    # account_id: int = Depends(authenticator.get_current_account_data)['account']['id'],
    saved_stock_id: int,
    queries: SavedStockQueries = Depends()):
    queries.delete_saved_stock(saved_stock_id)
    return True
