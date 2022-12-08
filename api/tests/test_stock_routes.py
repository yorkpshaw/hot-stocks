from fastapi import FastAPI
from fastapi.testclient import TestClient
from main import app
from routers.external.external import get_stock

client = TestClient(app)


def test_get_stock():

    # arrange
    symbol = "aapl"

    # act
    response = client.get(f"/api/stocks/{symbol}/")

    # assert
    assert response.status_code == 200
    data = response.json()
    assert data["stock"] is not None
