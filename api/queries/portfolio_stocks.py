from queries.pool import pool

class PortfolioStocksQueries:

    def get_all_portfolio_stocks(self, user_id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, user_id, symbol, num_shares, cost_basis
                    FROM portfolio_stocks;
                    WHERE user_id = %s
                    """,
                    user_id
                )
                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row
                        [i]
                        results.append(record)
                return results

    def create_portfolio_stock(self, data, user_id):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    user_id,
                    data.symbol,
                    data.num_shares,
                    data.cost_basis,
                ]
                cur.execute(
                    """
                    INSERT INTO portfolio_stocks
                        (user_id, symbol, num_shares, cost_basis)
                    VALUES
                        (%s,%s,%s,%s);
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

    def update_portfolio_stock(self, portfolio_stock_id, data):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    data.num_shares,
                    data.cost_basis,
                    portfolio_stock_id
                ]
                cur.execute(
                    """
                    UPDATE portfolio_stocks
                    SET num_shares = %s
                        , cost_basis = %s
                    WHERE ID = %s
                    RETURNING id, user_id, symbol, num_shares, cost_basis
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


    def delete_portfolio_stock(self, portfolio_stock_id):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM portfolio_stocks
                    WHERE ID = (%s)
                    """,
                    portfolio_stock_id,
                )
