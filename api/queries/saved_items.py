from pydantic import BaseModel
from typing import Dict
from queries.pool import pool
from datetime import datetime


# saved items is made up of news and stocks
class SavedNewsItemsIn(BaseModel):
    title: str
    posted_date: datetime


class SavedStocksIn(BaseModel):
    symbol: str
    cost_current: int


class SavedNewsItemsOut(BaseModel):
    id: int
    title: str
    posted_date: datetime


class SavedStocksOut(BaseModel):
    id: int
    symbol: str
    current_cost: int


# come back to this
class SavedItemsOut(BaseModel):
    saved_items: list["news_items", "stocks"]


from routers.saved_news_items import SavedNewsItemsOut
from routers.saved_stocks import SavedStocksOut


class SavedItemsOut(BaseModel):
    explore_items: Dict[
        SavedNewsItemsOut,
        SavedStocksOut
    ]

class SavedItemQueries:
    def get_all_saved_items(self) -> SavedItemsOut:

        news_items = SavedNewsItemQueries.get_all_saved_news_items()
        stocks = SavedStockQueries.get_all_saved_stocks()

        saved_items = {
            "news_items": news_items,
            "stocks": stocks,
        }

        return saved_items


# # saved items is made up of news and stocks
# class SavedNewsItemsIn(BaseModel):
#     title: str
#     posted_date: str


# class SavedStocksIn(BaseModel):
#     stock: str
#     ticker: int


# class SavedNewsItemsOut(BaseModel):
#     id: int
#     title: str
#     posted_date: str


# class SavedStocksOut(BaseModel):
#     id: int
#     stock: str
#     ticker: int


# class SavedItemsOut(BaseModel):
#     saved_items: Dict["news_items", "stocks"]


# class SavedItemsQueries:
#     def get_all_saved_items(self):
#         with pool.connection() as conn:
#             with conn.cursor() as db:
#                 db.execute(
#                     """
#             SELECT id,
#             FROM saved_items,
#             """
#                 )
#                 results = []
#                 for item in db.fetchall:
#                     item = item[i]
#                     results.append(item)
#                 return results

#     def delete(self, saved_item_id):
#         with pool.connection() as conn:
#             with conn.cursor() as db:
#                 db.execute(
#                     """
#               DELETE FROM saved items
#               WHERE id = %s
#               """,
#                     saved_item_id,
#                 )
