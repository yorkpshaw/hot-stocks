from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import Dict

from queries.explore_items import ExploreItemsQueries
from routers.news_items import NewsItemsExplore
from routers.explore_stocks import ExploreStocksExplore

router = APIRouter()


class ExploreItemsOut(BaseModel):
    explore_items: Dict[
        'news_items': NewsItemsExplore,
        'stocks': ExploreStocksExplore
    ]


@router.get("/api/explore_items", response_model=ExploreItemsOut)
def get_all_explore_items(queries: ExploreItemsQueries = Depends()):
    return {
        "explore_items": queries.get_all_explore_items(),
    }
