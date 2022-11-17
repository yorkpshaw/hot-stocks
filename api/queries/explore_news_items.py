from queries.pool import pool

class ExploreNewsItemQueries:
    def get_all_explore_news_items(self):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, title, url, time_published, banner_image
                    FROM explore_news_items
                    """
                )
                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)
                return results

    def get_explore_news_item(self, id):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, title, url, time_published, summary
                    FROM explore_news_items
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

    def create_explore_news_item(self, data):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    data.title,
                    data.url,
                    data.time_published,
                    data.banner_image,
                    data.summary
                ]
                cur.execute(
                    """
                    INSERT INTO explore_news_items (title, url, time_published, banner_image, summary)
                    VALUES (%s, %s, %s, %s, %s)
                    RETURNING id, title, url, time_published, banner_image, summary
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

    def update_explore_news_item(self, explore_news_item_id, data):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    data.title,
                    data.url,
                    data.time_published,
                    data.banner_image,
                    data.summary,
                    explore_news_item_id
                ]
                cur.execute(
                    """
                    UPDATE explore_news_items
                    SET title = %s
                      , url = %s
                      , time_published = %s
                      , banner_image = %s
                      , summary = %s
                    WHERE id = %s
                    RETURNING id, title, url, time_published, banner_image, summary
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

    def delete_explore_news_item(self, explore_news_item_id):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    DELETE FROM users
                    WHERE ID = (%s)
                    """,
                    explore_news_item_id,
                )
