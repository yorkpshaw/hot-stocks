from fastapi import APIRouter, Depends
from .authenticator import authenticator
from queries.saved_news_items import (
    SavedNewsItemIn,
    SavedNewsItemOut,
    SavedNewsItemsOut,
    SavedNewsItemQueries,
)


router = APIRouter()


@router.get("/api/saved_news_items", response_model=SavedNewsItemsOut)
def get_all_saved_news_items(
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: SavedNewsItemQueries = Depends(),
):
    account_id = account_data["id"]

    return {
        "news_items": queries.get_all_saved_news_items(account_id),
    }


@router.post("/api/saved_news_items/", response_model=SavedNewsItemOut)
def create_or_update_saved_news_item(
    news_item_in: SavedNewsItemIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: SavedNewsItemQueries = Depends(),
):
    account_id = account_data["id"]

    return queries.create_or_update_saved_news_item(news_item_in, account_id)


@router.delete("/api/saved_news_items/{news_item_id}", response_model=bool)
def delete_saved_news_item(
    news_item_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
    queries: SavedNewsItemQueries = Depends(),
):
    account_id = account_data["id"]

    queries.delete_saved_news_item(news_item_id, account_id)
    return True
