# from fastapi.testclient import TestClient
# from main import app

# from routers.external.external import get_all_stocks

# client = TestClient(app)


# class GetAllStockMock:
#     def get_all_stocks(self):
#         return []


# def test_get_all_stocks():
#     # arrange

#     # act
#     response = client.get("api/stocks")

#     # assert
#     ## Good response
#     ## list of stocks
#     assert response.status_code == 200
