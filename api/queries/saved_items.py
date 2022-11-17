from pydantic import BaseModel
from queries.pool import pool


# saved items is made up of news and stocks
class SavedNewsItemsIn(BaseModel):
    title: str
    posted_date: str


class SavedStocksIn(BaseModel):
    stock: str
    ticker: int


class SavedNewsItemsOut(BaseModel):
    id: int
    title: str
    posted_date: str


class SavedStocksOut(BaseModel):
    id: int
    stock: str
    ticker: int


class SavedItemsOut(BaseModel):
    saved_items: Dict["news_items", "stocks"]


class SavedItemsQueries:
    def get_all_saved_items(self):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
            SELECT id,
            FROM saved_items,
            """
                )
                results = []
                for item in db.fetchall:
                    item = item[i]
                    results.append(item)
                return results

    def delete(self, saved_item_id):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
              DELETE FROM saved items
              WHERE id = %s
              """,
                    saved_item_id,
                )
