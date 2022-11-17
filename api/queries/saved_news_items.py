from queries.pool import pool

class SavedNewsItemQueries:
    def get_all_saved_news_items(self):
        with pool.connection () as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, title, news_url, time_published, banner_image, summary, preference
                    FROM saved_news_items
                    """
                )
                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)
                return results

    # def get_saved_news_item(self, id):
    #     with pool.connection () as conn:
    #         with conn.cursor() as cur:
    #             cur.execute(
    #                 """
    #                 SELECT id, title, url, time_published, summary
    #                 FROM saved_news_items
    #                 WHERE id = %s
    #                 """,
    #                 [id],
    #             )
    #             record = None
    #             row = cur.fetchone()
    #             if row is not None:
    #                 record = {}
    #                 for i, column in enumerate(cur.description):
    #                     record[column.name] = row[i]
    #             return record

    def create_saved_news_item(self, data):
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
                    INSERT INTO saved_news_items (title, news_url, time_published, banner_image, summary, preference)
                    VALUES (%s, %s, %s, %s, %s)
                    RETURNING id, title, news_url, time_published, banner_image, summary, preference
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

    # def update_saved_news_item(self, news_item_id, data):
    #     with pool.connection () as conn:
    #         with conn.cursor() as cur:
    #             params = [
    #                 data.title,
    #                 data.url,
    #                 data.time_published,
    #                 data.banner_image,
    #                 data.summary,
    #                 news_item_id
    #             ]
    #             cur.execute(
    #                 """
    #                 UPDATE saved_news_items
    #                 SET title = %s
    #                   , url = %s
    #                   , time_published = %s
    #                   , banner_image = %s
    #                   , summary = %s
    #                 WHERE id = %s
    #                 RETURNING id, title, url, time_published, banner_image, summary
    #                 """,
    #                 params,
    #             )
    #             record = None
    #             row = cur.fetchone()
    #             if row is not None:
    #                 record = {}
    #                 for i, column in enumerate(cur.description):
    #                     record[column.name] = row[i]
    #             return record

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
