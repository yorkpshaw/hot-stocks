from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import List
from queries.saved_items import SavedItemsQueries

router = APIRouter()
