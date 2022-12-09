from pydantic import BaseModel
from typing import List
from queries.pool import pool


class PortfolioStockIn(BaseModel):
    symbol: str
    num_shares: int
    cost_basis: float


class PortfolioStockOut(BaseModel):
    id: int
    account_id: int
    symbol: str
    num_shares: int
    cost_basis: float


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

    def create_or_update_portfolio_stock(
        self, data: PortfolioStockIn, account_id: str
    ) -> PortfolioStockOut:
        with pool.connection() as conn:
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
                    ON CONFLICT (account_id, symbol) DO UPDATE
                        SET num_shares=(EXCLUDED.num_shares)
                        , cost_basis=(EXCLUDED.cost_basis)
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

    def delete_portfolio_stock(
        self, portfolio_stock_id: str, account_id: str
    ) -> bool:
        with pool.connection() as conn:
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
