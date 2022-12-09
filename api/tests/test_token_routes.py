from fastapi.testclient import TestClient
from routers.authenticator import authenticator
from queries.accounts import AccountQueries
from main import app

client = TestClient(app)


def get_token_with_token():
    return {
        "id": "500",
        "username": "example",
        "email": "example@example.com",
    }


def get_token_without_token():
    return None


def test_get_token_with_token():

    # arrange
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = get_token_with_token

    # act
    response = client.get(
        "/token", cookies={authenticator.cookie_name: "example"}
    )
    data = response.json()

    # assert
    assert response.status_code == 200
    assert data["access_token"] == "example"
    assert data["account"]["id"] == "500"
    assert data["token_type"] == "Bearer"

    # clean up
    app.dependency_overrides = {}


def test_get_token_without_token():

    # arrange
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = get_token_without_token

    # act
    response = client.get("/token")

    # assert
    assert response.status_code == 200
    assert response.json() is None

    # clean up
    app.dependency_overrides = {}


class AccountQueriesMock:
    def create(self, info, hashed_password):
        return {
            "id": "500",
            "username": "user",
            "email": "user@example.com",
            "hashed_password":
                "$2a$12$3NDZqR8ukkp9sHVK8H5.WOWeh70b7rpGwJgUpmRI3r0s8CXAtbk3G",
        }

    def get(self, username):
        return {
            "id": "500",
            "username": "user",
            "email": "user@example.com",
            "hashed_password":
                "$2a$12$3NDZqR8ukkp9sHVK8H5.WOWeh70b7rpGwJgUpmRI3r0s8CXAtbk3G",
        }


def test_create_account():

    # arrange
    app.dependency_overrides[AccountQueries] = AccountQueriesMock
    account = {
        "username": "user",
        "email": "user@example.com",
        "password": "example",
    }

    # act
    response = client.post(
        "/api/accounts",
        json=account,
    )

    # assert
    # get a 200
    assert response.status_code == 200

    # response as expected
    data = response.json()
    assert data["access_token"] is not None
    assert data["account"]["id"] is not None
    assert data["account"]["username"] == "user"

    # cleanup
    app.dependency_overrides = {}
