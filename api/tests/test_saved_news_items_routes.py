from fastapi.testClient import TestClient
from main import app

from queries.saved_news_items import SavedNewsItemQueries

client = TestClient(app)


class SavedNewsItemQueriesMock:
    def test_get_all_saved_news_items(self):
        return []


def test_get_all_saved_news_items():

    # arrange
    app.dependency_overrides[SavedNewsItemQueries] = SavedNewsItemQueriesMock
    # act
    response = client.get("api/saved_news_items")
    # assert
    assert response.status_code == 200


def test_create_or_update_saved_news_item():

    # arrange
    # assert
    pass
