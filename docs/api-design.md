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


## Explore items

### Get a combined list of news items, stocks

* Endpoint path: /explore_items
* Endpoint method: GET
* Query parameters:
  * q: the word(s) to search for

* Headers:
  * Authorization: Bearer token

* Response: A list of news items, stocks
* Response shape:
    ```json
    {
        "news_items": [
            {
              "id": number,
              "title": string,
              "url": string,
              "time_published": string,
              "banner_image": string
            }
        ],
        "stocks": [
            {
              "id": number,
              "symbol": string,
              "company_name": string
            }
        ]
    }
    ```


## News items

### Get list of news items

* Endpoint path: /news_items
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of news items
* Response shape:
    ```json
    {
      "news_items": [
          {
            "id": number,
            "title": string,
            "url": string,
            "time_published": string,
            "banner_image": string
          }
      ],
    }
    ```


### Create news item

* Endpoint path: /news_items
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "title": string,
      "url": string,
      "time_published": string,
      "summary": string
    }
    ```

* Response: A detail of news item
* Response shape:
    ```json
    {
      "id": number,
      "title": string,
      "url": string,
      "time_published": string,
      "summary": string
    }
    ```


### Get detail of news item

* Endpoint path: /news_items/`<int:id>`/
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A detail of news item
* Response shape:
    ```json
    {
      "id": number,
      "title": string,
      "url": string,
      "time_published": string,
      "summary": string
    }
    ```


### Update news item

* Endpoint path: /news_items/`<int:id>`/
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "title": string,
      "url": string,
      "time_published": string,
      "summary": string
    }
    ```

* Response: A detail of news item
* Response shape:
    ```json
    {
      "id": number,
      "title": string,
      "url": string,
      "time_published": string,
      "summary": string
    }
    ```

### Delete news item

* Endpoint path: /news_items/`<int:id>`/
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


## Stocks


### Get list of stocks

* Endpoint path: /stocks
* Endpoint method: GET

* Headers:/
  * Authorization: Bearer token

* Response: A list of stocks
* Response shape:
    ```json
    {
      "stocks": [
        {
          "id": number,
          "symbol": string,
          "company_name": string
        }
      ],
    }
    ```


### Create stock

* Endpoint path: /stocks/`<int:id>`/
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "symbol": string,
      "company_name": string,
      "company_description": string
    }
    ```

* Response: A detail of stock
* Response shape:
    ```json
    {
      "id": number,
      "symbol": string,
      "company_name": string,
      "company_description": string
    }
    ```


### Get detail of stock

* Endpoint path: /stocks/`<int:id>`/
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A detail of stock
* Response shape:
    ```json
    {
      "id": number,
      "symbol": string,
      "company_name": string,
      "company_description": string
    }
    ```

### Update stock

* Endpoint path: /stocks/`<int:id>`/
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "id": number,
      "symbol": string,
      "company_name": string,
      "company_description": string
    }
    ```

* Response: A detail of stock
* Response shape:
    ```json
    {
      "id": number,
      "symbol": string,
      "company_name": string,
      "company_description": string
    }
    ```

### Delete stock

* Endpoint path: /stocks/`<int:id>`/
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

* Response: An detail of portfolio stock
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
          "title": string,
          "url": string,
          "time_published": datetime,
        }
      ],
      "stocks": [
        {
          "symbol": string
        }
      ]
    }
    ```


### Saved news items

### List saved news items

* Endpoint path: /saved_items/news_items
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
          "news_item_id": number,
          "preference": boolean
        }
      ]
    }


### Create saved news item

* Endpoint path: /saved_items/news_items
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "user_id": number,
      "news_item_id": number,
      "preference": boolean
    }
    ```

* Response: An detail of saved news item
* Response shape:
    ```json
    {
      "id": number,
      "user_id": number,
      "news_item_id": number,
      "preference": boolean
    }


### Delete saved news item

* Endpoint path: /saved_items/news_items/`<int:id>`/
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

* Endpoint path: /saved_items/stocks
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
          "stock_id": number,
          "preference": boolean
        }
      ]
    }


### Create saved stocks

* Endpoint path: /saved_items/stocks
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "user_id": number,
      "stock_id": number,
      "preference": boolean
    }
    ```

* Response: An detail of saved stock
* Response shape:
    ```json
    {
      "id": number,
      "user_id": number,
      "stock_id": number,
      "preference": boolean
    }


### Delete saved stock

* Endpoint path: /saved_items/news_items/`<int:id>`/
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
