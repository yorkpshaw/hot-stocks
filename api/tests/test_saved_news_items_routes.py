from fastapi.testClient import TestClient
from main import app
import json

from queries.saved_news_items import SavedNewsItemQueries

# replace swagger in code
client = TestClient(app)

class SavedNewsItemQueriesMock:
    def create_or_update_saved_news_items(self):
        return {
            'id': 1,
            'account_id': 1,
            'title': 'test',
            'news_url': 'test',
            'time_published': 'test',
            'banner_image': 'test',
            'summary': 'test',
            'preference': 'true',
        }


def test_get_all_saved_news_items():

    # arrange

    # act

    # assert
    pass


def test_create_or_update_saved_news_item():

    # arrange
    app.dependency_overrides[SavedNewsItemQueries] = SavedNewsItemQueriesMock
    saved_news_item = {
        'title': 'test',
        'news_url': 'test',
        'time_published': 'test',
        'banner_image': 'test',
        'summary': 'test',
        'preference': 'true',
    }

    # act
    response = client.post('/api/saved_news_items', json.dumps(saved_news_item))

    # assert
    assert response.status_code == 200
    assert response.json()['title'] == 'test'


def test_delete_saved_news_item():

    # arrange

    # act

    # assert
    pass
