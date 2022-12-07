from fastapi.testclient import TestClient
from main import app

# replace swagger in code
client = TestClient(app)


def test_get_company():

    # arrange
    symbol = "example"

    # act
    response = client.get(f"/api/companies/{symbol}/")

    # assert
    # get a 200
    assert response.status_code == 200

    # response as expected
    assert response.json() == {
        "company": {"description": None, "name": None, "symbol": None}
    }

    # cleanup
    app.dependency_overrides = {}
