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
    # user_id: int = Depends(authenticator.get_current_account_data)['account']['id'],
    user_id: int,
    queries: SavedStockQueries = Depends()
    ):
    return {
        "stocks": queries.get_all_saved_stocks(user_id),
    }


@router.post("/api/saved_stocks/", response_model=SavedStockOut)
def create_saved_stock(
    # user_id: int = Depends(authenticator.get_current_account_data)['account']['id'],
    stock_in: SavedStockIn,
    user_id: int,
    queries: SavedStockQueries = Depends()
    ):
    return queries.create_saved_stock(stock_in, user_id)


@router.delete("/api/saved_stocks/{stock_id}", response_model=bool)
def delete_saved_stock(
    # user_id: int = Depends(authenticator.get_current_account_data)['account']['id'],
    stock_id: int,
    queries: SavedStockQueries = Depends()):
    queries.delete_saved_stock(stock_id)
    return True
