from fastapi.testClient import TestClient
from main import app

# replace swagger in code
client = TestClient(app)

def test_get_company():

    # arrange
    symbol = 'example'

    # act
    response = client.get(f'/api/companies/{symbol}/')

    # assert
    # get a 200
    assert response.status_code == 200

    # should call queries.get_stock()
    assert response.json() == {'company': None}

    # cleanup
    app.dependency_overrides = {}
