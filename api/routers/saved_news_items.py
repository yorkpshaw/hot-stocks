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


@router.get("/api/saved_news_items", response_model=SavedNewsItemsOut)
def get_all_saved_news_items(queries: SavedNewsItemQueries = Depends()):
    return {
        "news_items": queries.get_all_saved_news_items(),
    }


# @router.get("/api/saved_news_items/{news_item_id}", response_model= SavedNewsItemOut)
# def get_saved_news_item(
#     news_item_id: int,
#     response: Response,
#     queries: SavedNewsItemQueries = Depends(),
# ):
#     record = queries.get_saved_news_item(news_item_id)
#     if record is None:
#         response.status_code = 404
#     else:
#         return record


@router.post("/api/saved_news_items/", response_model=SavedNewsItemOut)
def create_saved_news_item(news_item_in: SavedNewsItemIn, queries: SavedNewsItemQueries = Depends()):
    return queries.create_saved_news_item(news_item_in)


# @router.put("/api/saved_news_items/{news_item_id}", response_model=SavedNewsItemOut)
# def update_saved_news_item(
#     news_item_id: int,
#     news_item_in: SavedNewsItemIn,
#     response: Response,
#     queries: SavedNewsItemQueries = Depends(),
# ):
#     record = queries.update_saved_news_item(news_item_id, news_item_in)
#     if record is None:
#         response.status_code = 404
#     else:
#         return record


@router.delete("/api/saved_news_items/{news_item_id}", response_model=bool)
def delete_saved_news_item(news_item_id: int, queries: SavedNewsItemQueries = Depends()):
    queries.delete_saved_news_item(news_item_id)
    return True
