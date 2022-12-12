from fastapi.testclient import TestClient
from main import app
from queries.saved_stocks import SavedStockQueries
from routers.authenticator import authenticator

client = TestClient(app)


class SavedStockQueriesMock:
    def get_all_saved_stocks(self, account_id):
        return {}

    def create_or_update_saved_stock(self, data, account_id):
        return {}

    def delete_saved_stock(self, saved_stock_id, account_id):
        return {}


def mockAccount():
    return {"id": "1", "username": "username", "password": "password"}


def override_account():
    return mockAccount


def test_get_all_saved_stocks():

    # arrange
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = mockAccount
    app.dependency_overrides[SavedStockQueries] = SavedStockQueriesMock
    # act
    response = client.get("api/saved_stocks")

    # assert
    assert response.status_code == 200


def test_create_or_update_saved_stock():

    # arrange
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = mockAccount
    app.dependency_overrides[SavedStockQueries] = SavedStockQueriesMock
    # act
    response = client.get("api/saved_stocks")
    # assert
    # get a 200 for posting
    assert response.status_code == 200
