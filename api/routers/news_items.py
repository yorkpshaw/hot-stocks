from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel

from queries.news_items import NewsItemQueries

router = APIRouter()


class NewsItemIn(BaseModel):
    title: str
    url: str
    time_published: str
    banner_image: str
    summary: str


class NewsItemOut(BaseModel):
    id: int
    title: str
    url: str
    time_published: str
    banner_image: str
    summary: str


class NewsItemExplore(BaseModel):
    id: int
    title: str
    url: str
    time_published: str
    banner_image: str


class NewsItemDetail(BaseModel):
    id: int
    title: str
    url: str
    time_published: str
    summary: str


class NewsItemsExplore(BaseModel):
    news_items: list[NewsItemExplore]


@router.get("/api/news_items", response_model=NewsItemsExplore)
def get_all_news_items(queries: NewsItemQueries = Depends()):
    return {
        "news_items": queries.get_all_news_items(),
    }


@router.get("/api/news_items/{news_item_id}", response_model= NewsItemDetail)
def get_news_item(
    news_item_id: int,
    response: Response,
    queries: NewsItemQueries = Depends(),
):
    record = queries.get_news_item(news_item_id)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.post("/api/news_items/", response_model=NewsItemOut)
def create_news_item(news_item_in: NewsItemIn, queries: NewsItemQueries = Depends()):
    return queries.create_news_item(news_item_in)


@router.put("/api/news_items/{news_item_id}", response_model=NewsItemOut)
def update_news_item(
    news_item_id: int,
    news_item_in: NewsItemIn,
    response: Response,
    queries: NewsItemQueries = Depends(),
):
    record = queries.update_news_item(news_item_id, news_item_in)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.delete("/api/news_items/{news_item_id}", response_model=bool)
def delete_news_item(news_item_id: int, queries: NewsItemOut = Depends()):
    queries.delete_news_item(news_item_id)
    return True
