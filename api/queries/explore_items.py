from queries.pool import pool
from queries.explore_news_items import get_all_explore_news_items
from queries.explore_stocks import get_all_explore_stocks

class ExploreItemsQueries:
    def get_all_explore_items(self):

        news_items = get_all_explore_news_items()
        stocks = get_all_explore_stocks()

        explore_items = {
            'news_items': news_items,
            'stocks': stocks,
        }

        return explore_items
