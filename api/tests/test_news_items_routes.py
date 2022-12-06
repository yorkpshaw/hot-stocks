from fastapi.testclient import TestClient
from main import app
import json
# from routers.external.acls import ACLs
from routers.external.external import get_all_news_items

client = TestClient(app)

class GetAllNewsItemsMock:
    def get_all_news_items(self):
        return []

def test_get_all_news_items():

    # arrange
    # app.dependency_overrides[] = GetAllNewsItemsMock

    # act
    response = client.get('/api/news_items')

    # assert
    assert response.status_code == 200
    data = response.json()
    assert data["news_items"][0]["title"] is not None


    # news_items = data.news_items
    # assert news_items[0].title is not None

    # Get into data, data.news_items
    # The first element has an attribute of title


    # cleanup
    # app.dependency_overrides = {}
