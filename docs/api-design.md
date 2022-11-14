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


## Form to login

* Endpoint path: /login
* Endpoint method: GET

* Response: A form to login
* Response shape:
    ```json
    {
        "success": boolean,
    }
    ```


## Form to sign up

* Endpoint path: /signup
* Endpoint method: GET

* Response: A form to sign up
* Response shape:
    ```json
    {
        "success": boolean,
    }
    ```


<!-- ### Get information about application use -->
<!-- maybe just do on front end? -->

<!-- * Endpoint path: /about
* Endpoint method: GET

* Response: List of each item in nav
* Response shape:
    ```json
    {
        "nav_items": [
            {
            "name": string,
            "description": datetime,
            }
        ]
    }
    ``` -->


### Get a combined list of news items, stocks

* Endpoint path: /explore
* Endpoint method: GET

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
<!-- redundant? -->

* Endpoint path: /explore/news_items/`<int:id>`/
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
<!-- redundant? -->

* Endpoint path: /explore/stocks/`<int:id>`/
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

<!--
## Share stock

* Endpoint path: /explore/stocks/`<int:id>`/share
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "text": string,
    }
    ```

* Response: An indication of success or failure
* Response shape:
    ```json
    {
        "success": boolean,
    }
    ```


## Share news item

* Endpoint path: /explore/news_items/`<int:id>`/share
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
    ```json
    {
      "text": string,
    }
    ```

* Response: An indication of success or failure
* Response shape:
    ```json
    {
        "success": boolean,
    }
    ```



## Show share stock form

* Endpoint path: /explore/stocks/`<int:id>`/share
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token


* Response: An indication of success or failure
* Response shape:
    ```json
    {
        "success": boolean,
    }
    ```


## Show share news item form

* Endpoint path: /explore/news_items/`<int:id>`/share
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token


* Response: An indication of success or failure
* Response shape:
    ```json
    {
        "success": boolean,
    }
    ``` -->


## Form to add or update stock to or in portfolio

* Endpoint path: /explore/stocks/`<int:id>`/update
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A form to add or update stock to or in portfolio
* Response shape:
    ```json
    {
        "success": boolean,
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
      "symbol": string,
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



### Get a list of news items, stocks

* Endpoint path: /search
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
            }
        ],
        "stocks": [
            {
            "symbol": string,
            "price": number,
            }
        ]
    }
    ```


### Get a list of PORTFOLIO stocks

* Endpoint path: /portfolio
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of portfolio stocks
* Response shape:
    ```json
    {
        "stocks": [
            {
            "symbol": string,
            "price": number,
            "chart": string, // unknown at this time; stretch?
            }
        ]
    }
    ```

### Add news items, stocks to SAVED

* Endpoint path: /saved
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request body:
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
            "price": number,
            }
        ]
    }
    ```

* Response: An indication of success or failure
* Response shape:
    ```json
    {
        "success": boolean,
    }


### Get a list of SAVED news items, stocks

* Endpoint path: /saved
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

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
            "price": number,
            }
        ]
    }
    ```


### Delete SAVED news item, stock

* Endpoint path: /saved/delete
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: An indication of success or failure
* Response shape:
    ```json
    {
        "success": boolean,
    }
    ```
    <!-- maybe updated list after deletion instead? -->
