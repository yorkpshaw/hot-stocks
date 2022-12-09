from main import app
from fastapi.testclient import TestClient
from queries.saved_stocks import SavedStockQueries
from routers.authenticator import authenticator

client = TestClient(app)


class SavedStockQueriesMock:
    def get_all_saved_stocks(self, account_id):
        return {}

    def create_or_update_saved_stock(self, data, account_id):
        return {}


def mockAccount():
    return {"id": "1", "username": "username", "password": "pasword"}


def override_account():
    return mockAccount


def test_get_all_saved_stocks():

    # arrange
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = mockAccount
    app.dependency_overrides[
        SavedStockQueries.get_all_saved_stocks
    ] = SavedStockQueriesMock.get_all_saved_stocks
    # act
    response = client.get("api/saved_stocks")

    # assert
    assert response.status_code == 200


def test_create_or_update_saved_stock():

    # arrange
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = mockAccount
    app.dependency_overrides[
        SavedStockQueries.create_or_update_saved_stock
    ] = SavedStockQueriesMock.create_or_update_saved_stock
    # act
    response = client.get("api/saved_stocks")
    # assert
    # get a 200 for posting
    assert response.status_code == 200
