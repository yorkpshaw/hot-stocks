from queries.pool import pool

class SavedNewsItemQueries:
    def get_all_saved_news_items(self, user_id):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, title, news_url, time_published, banner_image, summary, preference
                    FROM saved_news_items
                    WHERE user_id = %s
                    """,
                    user_id
                )
                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)
                return results

    def create_saved_news_item(self, data, user_id):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    user_id,
                    data.title,
                    data.url,
                    data.time_published,
                    data.banner_image,
                    data.summary
                ]
                cur.execute(
                    """
                    INSERT INTO saved_news_items (user_id, title, news_url, time_published, banner_image, summary, preference)
                    VALUES (%s, %s, %s, %s, %s)
                    RETURNING id, user_id, title, news_url, time_published, banner_image, summary, preference
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

    def delete_saved_news_item(self, news_item_id):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM saved_news_items
                    WHERE ID = (%s)
                    """,
                    news_item_id,
                )
