# from main import app
# from queries.saved_stocks import SavedStockQueries

# client = TestClient(app)


# class SavedStockQueriesMock:
#     def test_get_all_saved_stocks(self):
#         return {}


# def test_get_all_saved_stocks():

#     # arrange
#     app.dependency_overrides[SavedStockQueries] = SavedStockQueriesMock

#     # act
#     response = client.get("api/saved_stocks")

#     # assert
#     assert response.status_code == 200


# def test_create_or_update_saved_stock():

#     # arrange
#     app.dependency_overrides[SavedStockQueries] = SavedStockQueriesMock
#     # act
#     client.get("api/saved_stocks")
#     # assert
#     # get a 200 for posting
#     assert response.status_code == 200


# def test_delete_saved_stock():

#     # arrange
#     app.dependency_overrides[SavedStockQueries] = SavedStockQueriesMock
#     # act
#     client.get("api/saved_stocks/{saved_stock_id}")
#     # assert
#     response.status_code == 200
