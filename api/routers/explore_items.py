from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import Dict

from queries.explore_items import ExploreItemsQueries
from routers.news_items import NewsItemsExplore
from routers.stocks import StocksExplore

router = APIRouter()


class ExploreItemsOut(BaseModel):
    explore_items: Dict[
        NewsItemsExplore,
        StocksExplore
    ]


@router.get("/api/explore_items", response_model=ExploreItemsOut)
def get_all_explore_items(queries: ExploreItemsQueries = Depends()):
    return {
        "explore_items": queries.get_all_explore_items(),
    }
