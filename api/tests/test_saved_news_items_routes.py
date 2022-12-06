from main import app
from fastapi.testClient import TestClient
from queries.saved_news_items import SavedNewsItemQueries
import json

client = TestClient(app)

class SavedNewsItemsQueriesMock:
    def get_all_saved_news_items(self):
        return []

    def test_get_all_saved_news_items():

        # arrange

        # act

        # assert
        pass

    # /saved_news_items

    def test_create_or_update_saved_news_item():

        # arrange

        # act

        # assert
        pass

    # /saved_news_items/

    def test_delete_saved_news_item():

        # arrange

        # act

        # assert
        pass

    # /saved_news_items/`<int:id>`
