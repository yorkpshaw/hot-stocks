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
            "title": string,
            "time_published": string,
            "banner_image": string,
            }
        ],
        "stocks": [
            {
            "symbol": string,
            "company_name": string,
            "close": number, // pull from intraday API
            "chart": string, // unknown at this time
            }
        ]
    }
    ```


### Get a detailed view of news item (info)

* Endpoint path: /explore_items/news_items/`<int:id>`/
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A detail of news item
* Response shape:
    ```json
    {
        "title": string,
        "time_published": string,
        "summary": string,
    }
    ```


### Get a detailed view of stock (info)

* Endpoint path: /explore_items/stocks/`<int:id>`/
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A detail of stock
* Response shape:
    ```json
    {
        "symbol": string,
        "company_name": string,
        "company_description": string,
    }
    ```


## Add or update stock to or in portfolio

* Endpoint path: /portfolio_stocks
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "user_id": number,
      "stock_id": number,
      "num_shares": number,
      "cost_basis": number,
    }
    ```

* Response: An indication of success or failure
* Response shape:
    ```json
    {
        "success": boolean,
    }
    ```


### Get a list of PORTFOLIO stocks

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
            "stock_id": number,
            "cost_basis": number,
            "close": number, // get from intraday API
            "chart": string, // unknown at this time; stretch?
            }
        ]
    }
    ```


### Add news items, stocks to SAVED

* Endpoint path: /saved_items
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
        "user_id": number,
        "news_item_id": number,
        "preference": bool,
    }
    ```

* Response: An indication of success or failure
* Response shape:
    ```json
    {
        "success": boolean,
    }


### Get a list of SAVED news items, stocks

* Endpoint path: /saved_items
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
        "user_id": number,
    }
    ```

* Response: A list of saved news items, stocks
* Response shape:
    ```json
    {
        "news_items": [
            {
            "title": string,
            "time_published": datetime,
            }
        ],
        "stocks": [
            {
            "symbol": string,
            "close": number, // get from intraday API
            }
        ]
    }
    ```


### Delete SAVED news item, stock

* Endpoint path: /saved_items/`<int:id>`
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
        "user_id": number,
        "item_id": number,
        "item_type": str,
    }
    ```

* Response: An indication of success or failure
* Response shape:
    ```json
    {
        "success": boolean,
    }
    ```
