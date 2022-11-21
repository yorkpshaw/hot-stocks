from pydantic import BaseModel
from typing import List

from queries.pool import pool

class PortfolioStockUpdateIn(BaseModel):
    num_shares: int
    cost_basis: int

class PortfolioStockIn(BaseModel):
    symbol: str
    num_shares: int
    cost_basis: int

class PortfolioStockOut(BaseModel):
    id: int
    account_id: int
    symbol: str
    num_shares: int
    cost_basis: int

class PortfolioStocksOut(BaseModel):
    portfolio_stocks: List[PortfolioStockOut]


class PortfolioStockQueries:

    def get_all_portfolio_stocks(self, account_id: str) -> PortfolioStocksOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, account_id, symbol, num_shares, cost_basis
                    FROM portfolio_stocks
                    WHERE account_id = %s;
                    """,
                    [account_id],
                )
                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)
                return results

    def create_portfolio_stock(self, data: PortfolioStockIn, account_id: str) -> PortfolioStockOut:
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    account_id,
                    data.symbol,
                    data.num_shares,
                    data.cost_basis,
                ]
                cur.execute(
                    """
                    INSERT INTO portfolio_stocks
                        (account_id, symbol, num_shares, cost_basis)
                    VALUES
                        (%s,%s,%s,%s)
                    RETURNING id, account_id, symbol, num_shares, cost_basis;
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

    def update_portfolio_stock(self, portfolio_stock_id: int, data: PortfolioStockUpdateIn, account_id: str) -> PortfolioStockOut:
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    data.num_shares,
                    data.cost_basis,
                    portfolio_stock_id,
                    account_id,
                ]
                cur.execute(
                    """
                    UPDATE portfolio_stocks
                    SET num_shares = %s
                        , cost_basis = %s
                    WHERE ID = %s
                    AND account_id = %s
                    RETURNING id, account_id, symbol, num_shares, cost_basis
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


    def delete_portfolio_stock(self, portfolio_stock_id: str, account_id: str) -> bool:
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    portfolio_stock_id,
                    account_id,
                ]
                cur.execute(
                    """
                    DELETE FROM portfolio_stocks
                    WHERE ID = %s
                    AND account_id = %s
                    """,
                    params,
                )
