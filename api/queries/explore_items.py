from queries.pool import pool
from typing import Optional

class ExploreItemsQueries:
    def get_all_explore_items(self):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, username
                    FROM users
                    ORDER BY username
                    """
                )
                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)
                return results

    def get_explore_item(self, id):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, username
                    FROM users
                    WHERE id = %s
                    """,
                    [id],
                )
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                return record

    def create_explore_item(self, data):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    data.username
                ]
                cur.execute(
                    """
                    INSERT INTO users (username)
                    VALUES (%s)
                    RETURNING id, username
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

    def update_explore_item(self, user_id, data):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    data.username,
                    user_id
                ]
                cur.execute(
                    """
                    UPDATE users
                    SET username = %s
                    WHERE ID = (%s)
                    RETURNING id, username
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

    def delete_explore_item(self, user_id):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM users
                    WHERE ID = (%s)
                    """,
                    user_id,
                )
