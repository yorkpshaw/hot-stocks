from pydantic import BaseModel
from queries.pool import pool


class SavedNewsItemIn(BaseModel):
    title: str
    news_url: str
    time_published: str
    banner_image: str
    summary: str
    preference: bool


class SavedNewsItemOut(BaseModel):
    id: int
    account_id: int
    title: str
    news_url: str
    time_published: str
    banner_image: str
    summary: str
    preference: bool


class SavedNewsItemsOut(BaseModel):
    news_items: list[SavedNewsItemOut]


class SavedNewsItemQueries:
    def get_all_saved_news_items(self, account_id: str) -> SavedNewsItemsOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, account_id, title
                        , news_url, time_published, banner_image
                        , summary, preference
                    FROM saved_news_items
                    WHERE account_id = %s
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

    def create_or_update_saved_news_item(
        self, data: SavedNewsItemIn, account_id: str
    ) -> SavedNewsItemOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    account_id,
                    data.title,
                    data.news_url,
                    data.time_published,
                    data.banner_image,
                    data.summary,
                    data.preference,
                ]
                cur.execute(
                    """
                    INSERT INTO saved_news_items (account_id, title
                        , news_url, time_published, banner_image
                        , summary, preference)
                    VALUES (%s, %s, %s, %s, %s, %s, %s)
                    ON CONFLICT (account_id, news_url) DO UPDATE
                      SET preference=(EXCLUDED.preference)
                    RETURNING id, account_id, title, news_url
                        , time_published, banner_image
                        , summary, preference
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

    def delete_saved_news_item(
        self, news_item_id: int, account_id: str
    ) -> bool:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    news_item_id,
                    account_id,
                ]
                cur.execute(
                    """
                    DELETE FROM saved_news_items
                    WHERE ID = %s
                    AND account_id = %s
                    """,
                    params,
                )
