from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel

from queries.explore_news_items import ExploreNewsItemQueries

router = APIRouter()


class ExploreNewsItemIn(BaseModel):
    title: str
    url: str
    time_published: str
    banner_image: str
    summary: str


class ExploreNewsItemOut(BaseModel):
    id: int
    title: str
    url: str
    time_published: str
    banner_image: str
    summary: str


class ExploreNewsItemExplore(BaseModel):
    id: int
    title: str
    url: str
    time_published: str
    banner_image: str


class ExploreNewsItemDetail(BaseModel):
    id: int
    title: str
    url: str
    time_published: str
    summary: str


class ExploreNewsItemsExplore(BaseModel):
    news_items: list[ExploreNewsItemExplore]


@router.get("/api/explore_items/news_items", response_model=ExploreNewsItemsExplore)
def get_all_explore_news_items(queries: ExploreNewsItemQueries = Depends()):
    return {
        "news_items": queries.get_all_explore_news_items(),
    }


@router.get("/api/explore_items/news_items/{news_item_id}", response_model= ExploreNewsItemDetail)
def get_explore_news_item(
    news_item_id: int,
    response: Response,
    queries: ExploreNewsItemQueries = Depends(),
):
    record = queries.get_explore_news_item(news_item_id)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.post("/api/explore_items/news_items/", response_model=ExploreNewsItemOut)
def create_explore_news_item(news_item_in: ExploreNewsItemIn, queries: ExploreNewsItemQueries = Depends()):
    return queries.create_explore_news_item(news_item_in)


@router.put("/api/explore_items/news_items/{news_item_id}", response_model=ExploreNewsItemOut)
def update_explore_news_item(
    news_item_id: int,
    news_item_in: ExploreNewsItemIn,
    response: Response,
    queries: ExploreNewsItemQueries = Depends(),
):
    record = queries.update_explore_news_item(news_item_id, news_item_in)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.delete("/api/explore_items/news_items/{news_item_id}", response_model=bool)
def delete_explore_news_item(news_item_id: int, queries: ExploreNewsItemOut = Depends()):
    queries.delete_explore_news_item(news_item_id)
    return True
