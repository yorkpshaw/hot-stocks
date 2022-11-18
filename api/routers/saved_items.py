from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import Dict

from queries.saved_items import (
    SavedItemsOut,
    SavedItemQueries,
)


router = APIRouter()


# list of saved items
@router.get("/api/saved_items", response_model=SavedItemsOut)
def get_all_saved_items(queries: SavedItemQueries = Depends()):
    return {
        "saved_items": queries.get_all_saved_items(),
    }
