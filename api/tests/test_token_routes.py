from fastapi.testclient import TestClient
from routers.authenticator import authenticator
from main import app

client = TestClient(app)


def get_token_with_token():
    return {
        'id': '500',
        'username': 'example',
        'email': 'example@example.com',
    }

def get_token_without_token():
    return None


def test_get_token_with_token():

    # arrange
    app.dependency_overrides[authenticator.try_get_current_account_data] = get_token_with_token

    # act
    response = client.get('/token', cookies={authenticator.cookie_name: 'example'})
    data = response.json()

    # assert
    assert response.status_code == 200
    assert data['access_token'] == 'example'
    assert data['account']['id'] == '500'
    assert data['token_type'] == 'Bearer'

    # clean up
    app.dependency_overrides = {}



def test_get_token_without_token():

    # arrange
    app.dependency_overrides[authenticator.try_get_current_account_data] = get_token_without_token

    # act
    response = client.get('/token')

    # assert
    assert response.status_code == 200
    assert response.json() == None

    # clean up
    app.dependency_overrides = {}
