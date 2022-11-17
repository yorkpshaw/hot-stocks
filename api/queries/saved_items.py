from pydantic import BaseModel
from queries.pool import pool

from queries.saved_news_items import SavedNewsItemQueries
from queries.saved_stocks import SavedStockQueries

class SavedItemsQueries:
    def get_all_saved_items(self):

        news_items = SavedNewsItemQueries.get_all_saved_news_items()
        stocks = SavedStockQueries.get_all_saved_stocks()

        saved_items = {
            'news_items': news_items,
            'stocks': stocks,
        }

        return saved_items
