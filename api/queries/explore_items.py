from queries.pool import pool
from queries.news_items import NewsItemQueries
from queries.stocks import StockQueries

class ExploreItemsQueries:
    def get_all_explore_items(self):

        news_items = NewsItemQueries.get_all_news_items()
        stocks = StockQueries.get_all_stocks()

        explore_items = {
            'news_items': news_items,
            'stocks': stocks,
        }

        return explore_items


def add_explore_item(self):
    with pool.connection() as conn:
        with conn.cursor() as db:
            result = db.execute(
                """
        ADD

        """
            )
