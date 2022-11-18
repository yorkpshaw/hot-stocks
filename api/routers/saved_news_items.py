from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel

# from authenticator import authenticator
from queries.saved_news_items import (
    SavedNewsItemIn,
    SavedNewsItemOut,
    SavedNewsItemsOut,
    SavedNewsItemQueries,
)

router = APIRouter()



@router.get("/api/saved_news_items", response_model=SavedNewsItemsOut)
def get_all_saved_news_items(
    # user_id: int = Depends(authenticator.get_current_account_data)['account']['id'],
    queries: SavedNewsItemQueries = Depends()
    ):
    return {
        "news_items": queries.get_all_saved_news_items(),
    }


@router.post("/api/saved_news_items/", response_model=SavedNewsItemOut)
def create_saved_news_item(
    # user_id: int = Depends(authenticator.get_current_account_data)['account']['id'],
    news_item_in: SavedNewsItemIn,
    queries: SavedNewsItemQueries = Depends()
    ):
    return queries.create_saved_news_item(news_item_in)


@router.delete("/api/saved_news_items/{news_item_id}", response_model=bool)
def delete_saved_news_item(
    # user_id: int = Depends(authenticator.get_current_account_data)['account']['id'],
    news_item_id: int,
    queries: SavedNewsItemQueries = Depends()
    ):
    queries.delete_saved_news_item(news_item_id)
    return True
