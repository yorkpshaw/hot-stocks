## Authentication

### Log in

* Endpoint path: /token
* Endpoint method: POST

* Request shape (form):
  * username: string
  * password: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "account": {
        username: string,
        password: secure string,
      },
      "token": string
    }
    ```


### Log out

* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    ```json
    true
    ```


### Sign up

* Endpoint path: /signup
* Endpoint method: POST

* Request shape (form):
    * username: string
    * password: string
    * confirm_password: string

* Response: Account information and a token, only returned if password == confirm_password
* Response shape (JSON):
    ```json
    {
      "account": {
        username: string,
        password: secure string,
      },
      "token": string
    }
    ```


## Portfolio stocks


### Get list of portfolio stocks

* Endpoint path: /portfolio_stocks
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "user_id": number
    }
    ```

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


### Create portfolio stock

* Endpoint path: /portfolio_stocks
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "user_id": number,
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
      "user_id": number,
      "stock_id": number,
      "num_shares": number,
      "cost_basis": number
    }


### Update portfolio stock

* Endpoint path: /portfolio_stocks/`<int:id>`/
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "id": number,
      "user_id": number,
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
      "user_id": number,
      "stock_id": number,
      "num_shares": number,
      "cost_basis": number
    }
    ```


### Delete portfolio stock

* Endpoint path: /portfolio_stocks/`<int:id>`/
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

### Get a list of saved items

* Endpoint path: /saved_items
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "user_id": number
    }
    ```

* Response: A list of saved news items, stocks
* Response shape:
    ```json
    {
      "news_items": [
        {
          "id": number,
          "user_id": number,
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
          "user_id": number,
          "symbol": number,
          "preference": boolean
        }
      ]
    }
    ```


### Saved news items

### List saved news items

* Endpoint path: /saved_news_items
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "user_id": number
    }
    ```

* Response: An list of saved news items
* Response shape:
    ```json
    {
      "saved_news_items":[
        {
          "id": number,
          "user_id": number,
          "title": str,
          "news_url": str,
          "time_published": str,
          "banner_image": str,
          "summary": str,
          "preference": boolean
        }
      ]
    }


### Create saved news item

* Endpoint path: /saved_news_items
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "user_id": number,
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
      "user_id": number,
      "title": str,
      "news_url": str,
      "time_published": str,
      "banner_image": str,
      "summary": str,
      "preference": boolean
    }


### Delete saved news item

* Endpoint path: /saved_news_items/`<int:id>`/
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

### List saved stocks

* Endpoint path: /saved_stocks
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "user_id": number
    }
    ```

* Response: An list of saved stocks
* Response shape:
    ```json
    {
      "saved_stocks":[
        {
          "id": number,
          "user_id": number,
          "symbol": number,
          "preference": boolean
        }
      ]
    }


### Create saved stock

* Endpoint path: /saved_stocks
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "user_id": number,
      "symbol": number,
      "preference": boolean
    }
    ```

* Response: A detail of saved stock
* Response shape:
    ```json
    {
      "id": number,
      "user_id": number,
      "symbol": number,
      "preference": boolean
    }


### Update saved stock

* Endpoint path: /saved_stocks/`<int:id>`/
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "id": number,
      "user_id": number,
      "symbol": number,
      "preference": boolean
    }
    ```

* Response: A detail of saved stock
* Response shape:
    ```json
    {
      "id": number,
      "user_id": number,
      "symbol": number,
      "preference": boolean
    }



### Delete saved stock

* Endpoint path: /saved_stocks/`<int:id>`/
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
