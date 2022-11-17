from queries.pool import pool
from portfolio_stocks import PortfolioIn, PortfolioOut

class PortfolioStocksQueries:

    def create_portfolio_item(self, portfolio_stocks: PortfolioIn) -> PortfolioOut:
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    portfolio_stocks.num_shares,
                    portfolio_stocks.cost_basis,
                ]
                cur.execute(
                    """
                    INSERT INTO portfolio_stocks
                        num_shares, cost_basis)
                    VALUES
                        (%s, %s):
                    """,
                    params,
                )
                record = None
                row = cur.fetchone() [0]
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                return record

    def get_all_portfolio_items(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, user_id, stock_id, num_shares, cost_basis
                    FROM portfolio_stocks;
                    ORDER BY stock_id;
                    """
                )
                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row
                        [i]
                        results.append(record)
                return results


    def update_portfolio_item(self, portfolio_stocks: PortfolioIn):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    portfolio_stocks.num_shares,
                    portfolio_stocks.cost_basis
                ]
                cur.execute(
                    """
                    UPDATE portfolio
                    SET num_shares = %s
                        , cost_basis = %s
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