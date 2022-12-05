## Authentication

### Get Token

* Endpoint path: /token
* Endpoint method: GET

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "access_token": string,
      "token_type": string,
      "account": {
        "id": string,
        "username": string,
        "email": string
      }
    }
    ```

### Login

* Endpoint path: /token
* Endpoint method: POST

* Request shape (JSON):
    ```json
    {
      "username": string,
      "password": string,
    }
    ```

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "access_token": string,
      "token_type": string
    }
    ```

### Logout

* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    ```json
    true
    ```

### Create Account

* Endpoint path: /accounts
* Endpoint method: POST

* Request shape (JSON):
  ```json
  {
    "username": string,
    "email": string,
    "password": string,
  }
  ```

* Response: Account information and a token, only returned if password == confirm_password
* Response shape (JSON):
    ```json
    {
      "access_token": string,
      "token_type": string,
      "account": {
        "id": string,
        "username": string,
        "email": string,
      }
    }
    ```


## Portfolio stocks

### Get All Portfolio Stocks

* Endpoint path: /portfolio_stocks
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of portfolio stocks
* Response shape (JSON):
    ```json
    {
      "portfolio_stocks": [
        {
          "id": number,
          "account_id": number,
          "symbol": string,
          "num_shares": number,
          "cost_basis": number
        }
      ]
    }
    ```

### Create or Update Portfolio Stock

* Endpoint path: /portfolio_stocks/
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
    ```json
    {
      "symbol": string,
      "num_shares": number,
      "cost_basis": number,
    }
    ```

* Response: A detail of portfolio stock
* Response shape (JSON):
    ```json
    {
      "id": number,
      "account_id": number,
      "symbol": string,
      "num_shares": number,
      "cost_basis": number
    }

### Delete Portfolio Stock

* Endpoint path: /portfolio_stocks/`<int:id>`
* Endpoint method: DELETE
* Query Parameters:
  * portfolio_stock_id

* Headers:
  * Authorization: Bearer token

* Response: A detail of portfolio stock
* Response shape (JSON):
    ```json
    {
      "success": boolean
    }
    ```


## Saved news items

### Get All Saved News Items

* Endpoint path: /saved_news_items
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: An list of saved news items
* Response shape:
    ```json
    {
      "news_items":[
        {
          "id": number,
          "account_id": number,
          "title": string,
          "news_url": string,
          "time_published": string,
          "banner_image": string,
          "summary": string,
          "preference": boolean
        }
      ]
    }


### Create Or Update Saved News Item

* Endpoint path: /saved_news_items/
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
    ```json
    {
      "title": string,
      "news_url": string,
      "time_published": string,
      "banner_image": string,
      "summary": string,
      "preference": boolean
    }
    ```

* Response: A detail of saved news item
* Response shape (JSON):
    ```json
    {
      "id": number,
      "account_id": number,
      "title": string,
      "news_url": string,
      "time_published": string,
      "banner_image": string,
      "summary": string,
      "preference": boolean
    }


### Delete Saved News Item

* Endpoint path: /saved_news_items/`<int:id>`
* Endpoint method: DELETE
* Query Parameters:
  * news_item_id

* Headers:
  * Authorization: Bearer token

* Response: An indication of success or failure
* Response shape (JSON):
    ```json
    {
      "success": boolean
    }
    ```


## Saved stocks

### Get All Saved Stocks

* Endpoint path: /saved_stocks
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: An list of saved stocks
* Response shape (JSON):
    ```json
    {
      "saved_stocks":[
        {
          "id": number,
          "account_id": number,
          "symbol": string,
          "preference": boolean
        }
      ]
    }

### Create Or Update Saved Stock

* Endpoint path: /saved_stocks/
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
    ```json
    {
      "symbol": string,
      "preference": boolean
    }
    ```

* Response: A detail of saved stock
* Response shape (JSON):
    ```json
    {
      "id": number,
      "account_id": number,
      "symbol": string,
      "preference": boolean
    }
    ```


### Delete Saved Stock

* Endpoint path: /saved_stocks/`<int:id>`
* Endpoint method: DELETE
* Query Parameters:
  * saved_stock_id

* Headers:
  * Authorization: Bearer token

* Response: An indication of success or failure
* Response shape (JSON):
    ```json
    {
      "success": boolean
    }
    ```


## External-API-interfacing endpoints

### Get Company

* Endpoint path: /companies/`<str:symbol>`/
* Endpoint method: GET
* Query Parameters:
  * symbol

* Headers:
  * Authorization: Alphavantage token

* Response: A detail of stock
* Response shape (JSON):
    ```json
    {
      "company":
        {
          "symbol": string,
          "name": string,
          "description": string
        }
    }
    ```

### Get Stock

* Endpoint path: /stocks/`<str:symbol>`/
* Endpoint method: GET
* Query Parameters:
  * symbol

* Headers:
  * Authorization: Alphavantage token

* Response: A detail of stock
* Response shape (JSON):
    ```json
    {
      "stock": [
        {
          string: string
        }
      ]
    }
    ```

### Get All Stocks

* Endpoint path: /stocks
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of stocks
* Response shape (JSON):
    ```json
    {
      "stocks":[
        {
          "symbol": string,
          "name": string,
          "cost_current": number
        }
      ]
    }

### Get All News Items

* Endpoint path: /news_items
* Endpoint method: GET

* Headers:
  * Authorization: Alphavantage token

* Response: A list of news items
* Response shape (JSON):
    ```json
    {
      "news_items": [
        {
          "title": string,
          "news_url": string,
          "time_published": string,
          "summary": string,
          "banner_image": string
        }
      ]
    }
    ```
