from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel

from queries.saved_news_items import SavedNewsItemQueries

router = APIRouter()


class SavedNewsItemIn(BaseModel):
    user_id: int
    title: str
    news_url: str
    time_published: str
    banner_image: str
    summary: str
    preference: bool


class SavedNewsItemOut(BaseModel):
    id: int
    user_id: int
    title: str
    news_url: str
    time_published: str
    banner_image: str
    summary: str
    preference: bool


class SavedNewsItemsOut(BaseModel):
    news_items: list[SavedNewsItemOut]


@router.get("/api/news_items", response_model=SavedNewsItemsOut)
def get_all_saved_news_items(queries: SavedNewsItemQueries = Depends()):
    return {
        "news_items": queries.get_all_saved_news_items(),
    }


@router.post("/api/news_items/", response_model=SavedNewsItemOut)
def create_saved_news_item(
    news_item_in: SavedNewsItemIn, queries: SavedNewsItemQueries = Depends()
):
    return queries.create_saved_news_item(news_item_in)


@router.delete("/api/news_items/{news_item_id}", response_model=bool)
def delete_saved_news_item(
    news_item_id: int, queries: SavedNewsItemQueries = Depends()
):
    queries.delete_saved_news_item(news_item_id)
    return True
