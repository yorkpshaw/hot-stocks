from pydantic import BaseModel
from typing import Dict


from queries.saved_news_items import SavedNewsItemsOut, SavedNewsItemQueries
from queries.saved_stocks import SavedStocksOut, SavedStockQueries


class SavedItemsOut(BaseModel):
    saved_items: Dict[SavedNewsItemsOut, SavedStocksOut]


class SavedItemQueries:
    def get_all_saved_items(self, account_id: str) -> SavedItemsOut:

        news_items = SavedNewsItemQueries.get_all_saved_news_items(self=self, account_id=account_id)
        stocks = SavedStockQueries.get_all_saved_stocks(self=self, account_id=account_id)

        saved_items = {
            "news_items": news_items,
            "stocks": stocks,
        }

        return saved_items
