from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import List
from queries.explore_items import ExploreItemsQueries

router = APIRouter()
