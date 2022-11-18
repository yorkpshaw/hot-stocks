from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import Dict

# from authenticator import authenticator
from queries.saved_items import (
    SavedItemsOut,
    SavedItemQueries,
)


router = APIRouter()


# list of saved items
@router.get("/api/saved_items", response_model=SavedItemsOut)
def get_all_saved_items(
    # account_data: dict = Depends(authenticator.get_current_account_data),
    queries: SavedItemQueries = Depends()
    ):
    return {
        "saved_items": queries.get_all_saved_items(),
    }
