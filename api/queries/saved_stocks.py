from queries.pool import pool


class SavedStockQueries:
    def get_all_saved_stocks(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, user_id, symbol, preference
                    FROM saved_stocks
                    """
                )
                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)
                return results

    def create_saved_stock(self, data):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    data.symbol,
                    data.company_name,
                    data.company_description,
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

    def delete_saved_stock(self, stock_id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM saved_stocks
                    WHERE ID = (%s)
                    """,
                    stock_id,
                )
