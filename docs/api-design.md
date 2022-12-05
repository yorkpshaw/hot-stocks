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
        "email": string,
      },
      "token": string
    }
    ```


### Login

* Endpoint path: /token
* Endpoint method: POST

* Request shape (form):
  * username: string
  * password: string

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

* Request shape (form):
    * username: string
    * email: string
    * password: string

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
      },
    }
    ```


## Portfolio stocks

### Get All Portfolio Stocks

* Endpoint path: /portfolio_stocks
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of portfolio stocks
* Response shape:
    ```json
    {
      "portfolio_stocks": [
        {
          "id": number,
          "stock_id": number,
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

* Request body:
    ```json
    {
      "account_id": number,
      "stock_id": number,
      "num_shares": number,
      "cost_basis": number
    }
    ```

* Response: A detail of portfolio stock
* Response shape:
    ```json
    {
      "id": number,
      "account_id": number,
      "stock_id": number,
      "num_shares": number,
      "cost_basis": number
    }

### Delete Portfolio Stock

* Endpoint path: /portfolio_stocks/`<int:id>`
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "id": number
    }
    ```

* Response: A detail of portfolio stock
* Response shape:
    ```json
    {
      "success": boolean
    }
    ```


## Saved items

### Get All Saved Items

* Endpoint path: /saved_items
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "account_id": number
    }
    ```

* Response: A list of saved news items, stocks
* Response shape:
    ```json
    {
      "news_items": [
        {
          "id": number,
          "account_id": number,
          "title": str,
          "news_url": str,
          "time_published": str,
          "banner_image": str,
          "summary": str,
          "preference": boolean
        }
      ],
      "stocks": [
        {
          "id": number,
          "account_id": number,
          "symbol": number,
          "preference": boolean
        }
      ]
    }
    ```


### Saved news items

### Get All Saved News Items

* Endpoint path: /saved_news_items
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "account_id": number
    }
    ```

* Response: An list of saved news items
* Response shape:
    ```json
    {
      "saved_news_items":[
        {
          "id": number,
          "account_id": number,
          "title": str,
          "news_url": str,
          "time_published": str,
          "banner_image": str,
          "summary": str,
          "preference": boolean
        }
      ]
    }


### Create Saved News Item

* Endpoint path: /saved_news_items/
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "account_id": number,
      "title": str,
      "news_url": str,
      "time_published": str,
      "banner_image": str,
      "summary": str,
      "preference": boolean
    }
    ```

* Response: A detail of saved news item
* Response shape:
    ```json
    {
      "id": number,
      "account_id": number,
      "title": str,
      "news_url": str,
      "time_published": str,
      "banner_image": str,
      "summary": str,
      "preference": boolean
    }


### Delete Saved News Item

* Endpoint path: /saved_news_items/`<int:id>`
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "id": number
    }
    ```

* Response: An indication of success or failure
* Response shape:
    ```json
    {
      "success": boolean
    }
    ```


### Saved stocks

### Get All Saved Stocks

* Endpoint path: /saved_stocks
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "account_id": number
    }
    ```

* Response: An list of saved stocks
* Response shape:
    ```json
    {
      "saved_stocks":[
        {
          "id": number,
          "account_id": number,
          "symbol": number,
          "preference": boolean
        }
      ]
    }


### Create Saved Stock

* Endpoint path: /saved_stocks/
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "account_id": number,
      "symbol": number,
      "preference": boolean
    }
    ```

* Response: A detail of saved stock
* Response shape:
    ```json
    {
      "id": number,
      "account_id": number,
      "symbol": number,
      "preference": boolean
    }


### Update Saved Stock

* Endpoint path: /saved_stocks/`<int:id>`
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "id": number,
      "account_id": number,
      "symbol": number,
      "preference": boolean
    }
    ```

* Response: A detail of saved stock
* Response shape:
    ```json
    {
      "id": number,
      "account_id": number,
      "symbol": number,
      "preference": boolean
    }



### Delete Saved Stock

* Endpoint path: /saved_stocks/`<int:id>`
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "id": number
    }
    ```

* Response: An indication of success or failure
* Response shape:
    ```json
    {
      "success": boolean
    }
    ```


## External-API-interfacing endpoints

### Get company

* Endpoint path: /companies/`<str:symbol>`/
* Endpoint method: GET

* Headers:
  * Authorization: Alphavantage token

* Request body:
    ```json
    {
      "symbol": str
    }
    ```

* Response: A detail of stock
* Response shape:
    ```json
    {
      "company": [
        {
          TODO
        }
      ]
    }
    ```


### Get stock

* Endpoint path: /stocks/`<str:symbol>`
* Endpoint method: GET

* Headers:
  * Authorization: Alphavantage token

* Request body:
    ```json
    {
      "symbol": str
    }
    ```

* Response: A detail of stock
* Response shape:
    ```json
    {
      "stock": [
        {
          TODO
        }
      ]
    }
    ```


### Get list of news items

* Endpoint path: /news_items
* Endpoint method: GET

* Headers:
  * Authorization: Alphavantage token

* Response: A list of news items
* Response shape:
    ```json
    {
      "news_items": [
        {
          TODO
        }
      ]
    }
    ```
