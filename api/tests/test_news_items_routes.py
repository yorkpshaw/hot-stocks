from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


class GetAllNewsItemsMock:
    def get_all_news_items(self):
        return []


def test_get_all_news_items():

    # arrange

    # act
    response = client.get("/api/news_items")

    # assert
    assert response.status_code == 200
    data = response.json()
    assert data["news_items"][0]["title"] is not None
