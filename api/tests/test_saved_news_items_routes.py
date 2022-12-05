from main import app
from queries.saved_news_items import SavedNewsItemQueries


class SavedNewsItemQueriesMock:
    pass


def test_get_all_saved_news_items():

    # arrange
    app.dependency_overrides[SavedNewsItemQueries] = SavedNewsItemQueriesMock
    # act
    response = client.get("api/saved_news_items")
    # assert


def test_create_or_update_saved_news_item():

    # arrange

    # act

    # assert
    pass


def test_delete_saved_news_item():

    # arrange

    # act

    # assert
    pass
