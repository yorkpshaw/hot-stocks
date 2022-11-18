from pydantic import BaseModel
from typing import Dict
from queries.pool import pool

from queries.saved_news_items import SavedNewsItemQueries
from queries.saved_stocks import SavedStockQueries

from routers.saved_news_items import SavedNewsItemsOut
from routers.saved_stocks import SavedStocksOut


class SavedItemsOut(BaseModel):
    explore_items: Dict[
        SavedNewsItemsOut,
        SavedStocksOut
    ]

class SavedItemQueries:
    def get_all_saved_items(self):

        news_items = SavedNewsItemQueries.get_all_saved_news_items()
        stocks = SavedStockQueries.get_all_saved_stocks()

        saved_items = {
            'news_items': news_items,
            'stocks': stocks,
        }

        return saved_items
