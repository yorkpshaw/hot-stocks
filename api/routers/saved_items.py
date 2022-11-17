from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import Dict

from queries.saved_items import SavedItemsQueries

from routers.saved_news_items import SavedNewsItemsOut
from routers.saved_stocks import SavedStocksOut


router = APIRouter()

class SavedItemsOut(BaseModel):
    explore_items: Dict[
        SavedNewsItemsOut,
        SavedStocksOut
    ]

# list of saved items
@router.get("/api/saved_items", response_model=SavedItemsOut)
def get_all_saved_items(queries: SavedItemsQueries = Depends()):
    return {
        "saved_items": queries.get_all_saved_items(),
    }
