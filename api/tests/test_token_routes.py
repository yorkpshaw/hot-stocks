from fastapi.testclient import TestClient
from routers.authenticator import authenticator
from main import app

client = TestClient(app)


def test_get_token_returns_none_for_user_not_logged_in():
    app.dependency_overrides[authenticator.try_get_current_account_data] = lambda: None
    response = client.get("/token")
    app.dependency_overrides = {}
    assert response.status_code == 200
    assert response.json() == None


def test_get_token_returns_none_for_user_not_logged_in():
    account = {
        "id": "500",
        "username": "example",
        "email": "example@example.com",
    }
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = lambda: account
    response = client.get("/token", cookies={authenticator.cookie_name: "exaple_cookie"})
    app.dependency_overrides = {}
    assert response.status_code == 200
    data = response.json()
    assert data["access_token"] == "exaple_cookie"
    assert data["account"] == account
    assert data["token_type"] == "Bearer"
