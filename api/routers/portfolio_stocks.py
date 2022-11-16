from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import List
from queries.portfolio_stocks import PortfolioStocksQueries

router = APIRouter()
