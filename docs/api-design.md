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

* Endpoint path: /items
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
            "posted_date": datetime,
            "image_url": string,
            }
        ],
        "stocks": [
            {
            "symbol": string,
            "name": string,
            "price": number,
            "chart": string, // unknown at this time
            }
        ]
    }
    ```


### Get a detailed view of news item (info)

* Endpoint path: /items/news/`<int:id>`/
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A detail of news item
* Response shape:
    ```json
    {
        "title": string,
        "posted_date": datetime,
        "description": string,
    }
    ```


### Get a detailed view of stock (info)

* Endpoint path: /items/stocks/`<int:id>`/
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A detail of stock
* Response shape:
    ```json
    {
        "symbol": string,
        "name": string,
        "description": string,
    }
    ```


## Add or update stock to or in portfolio

* Endpoint path: /portfolio
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "user_id": number,
      "symbol": str,
      "cost_basis": number,
      "shares": number,
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

* Endpoint path: /portfolio
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
        "stocks": [
            {
            "symbol": str,
            "cost_basis": number,
            "cost_current": number,
            "chart": string, // unknown at this time; stretch?
            }
        ]
    }
    ```


### Add news items, stocks to SAVED

* Endpoint path: /lists
* Endpoint method: POST

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


### Get a list of SAVED news items, stocks

* Endpoint path: /lists
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
            "posted_date": datetime,
            }
        ],
        "stocks": [
            {
            "symbol": string,
            "cost_current": number,
            }
        ]
    }
    ```


### Delete SAVED news item, stock

* Endpoint path: /lists/`<int:id>`
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
