# from fastapi.testClient import TestClient
from main import app

from queries.saved_items import SavedItemQueries

# replace swagger in code
client = TestClient(app)


class SavedItemQueriesMock:
    def get_all_saved_items(self):
        return {}


def test_get_all_saved_items():

    # arrange
    app.dependency_overrides[SavedItemQueries] = SavedItemQueriesMock

    # act
    response = client.get("/api/saved_items")

    # assert
    # get a 200
    assert response.status_code == 200

    # should call queries.get_all_saved_items()
    assert response.json() == {"saved_items": {}}

    # cleanup
    app.dependency_overrides = {}
