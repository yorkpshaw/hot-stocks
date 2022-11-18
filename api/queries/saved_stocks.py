from queries.pool import pool
from pydantic import BaseModel


class SavedStockIn(BaseModel):
    user_id: int
    symbol: str
    preference: bool


class SavedStockOut(BaseModel):
    id: int
    user_id: int
    symbol: str
    preference: bool


class SavedStocksOut(BaseModel):
    stocks: list[SavedStockOut]


class SavedStockQueries:
    def get_all_saved_stocks(self, user_id: int) -> SavedStocksOut:
        with pool.connection () as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, user_id, symbol, preference
                    FROM saved_stocks
                    WHERE user_id = %s
                    """,
                    user_id,
                )
                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)
                return results

    def create_saved_stock(self, data: SavedStockIn, user_id: int) -> SavedStockOut:
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    user_id,
                    data.symbol,
                    data.preference,
                ]
                cur.execute(
                    """
                    INSERT INTO saved_stocks (user_id, symbol, preference)
                    VALUES (%s, %s, %s)
                    RETURNING id, user_id, symbol, preference
                    """,
                    params,
                )
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                return record

    def delete_saved_stock(self, stock_id: int) -> bool:
        with pool.connection () as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM saved_stocks
                    WHERE ID = (%s)
                    """,
                    stock_id,
                )
