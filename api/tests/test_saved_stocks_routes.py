# from main import app
# from queries.saved_stocks import SavedStockQueries
# from fastapi.testclient import TestClient

# ## lets think this through.  I want the authenticator to be present while I am
# ## running the test for authentication .. this makes sense..
# ## can I tell the app to overide the authenticator 🤔
# from routers.authenticator import authenticator

# client = TestClient(app)


# class SavedStockQueriesMock:
#     def test_get_all_saved_stocks(self):
#         return {}


def mockAccount():
    return {"id": "1", "username": "username", "password": "pasword"}


# def override_account():
#     return mockAccount


# def test_get_all_saved_stocks():

    # arrange
    app.dependency_overrides[authenticator.try_get_current_account_data] = mockAccount
    # act
    response = client.get("api/saved_stocks")

#     # assert
#     assert response.status_code == 200


# def test_create_or_update_saved_stock():

    # arrange
    app.dependency_overrides[authenticator.try_get_current_account_data] = mockAccount

    # act
    response = client.get("api/saved_stocks")
    # assert
    # get a 200 for posting
    assert response.status_code == 200
