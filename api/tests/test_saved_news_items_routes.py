# from fastapi.testclient import TestClient
# from main import app
# import json

# from queries.saved_news_items import SavedNewsItemQueries

# client = TestClient(app)


# class SavedNewsItemQueriesMock:
#     def get_all_saved_news_items(self):
#         return []

#     def create_or_update_saved_news_item(self, news_item):
#         response = {
#             "id": 1,
#             "title": "string",
#             "news_url": "string",
#             "time_published": "string",
#             "banner_image": "string",
#             "summary": "string",
#             "preference": True
#         }
#         response.update(news_item)
#         return response


# def test_get_all_saved_news_items():

#     # arrange
#     app.dependency_overrides[SavedNewsItemQueries] = SavedNewsItemQueriesMock

#     # act
#     response = client.get('/saved_news_items')

#     # assert
#     assert response.status_code == 200
#     assert response.json() == {"saved_news_items": []}

#     # cleanup
#     app.dependency_overrides = {}

# def test_create_or_update_saved_news_item():

#     # arrange
#     app.dependency_overrides[SavedNewsItemQueries] = SavedNewsItemQueriesMock
#     news_item = {
#         "title": "testing",
#         "news_url": "string",
#         "time_published": "string",
#         "banner_image": "string",
#         "summary": "string",
#         "preference": True,
#     }

#     # act
#     response = client.post('/saved_news_items/', json.dumps(news_item))

#     # assert
#     assert response.status_code == 200
#     assert response.json()["title"] == "testing"



# # def test_delete_saved_news_item():

#     # arrange

#     # act

#     # assert
#     # pass

#     # /saved_news_items/`<int:id>`
