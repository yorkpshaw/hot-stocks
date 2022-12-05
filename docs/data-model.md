# Data models

## Hot Stocks monolith

---

### Account

| name             | type   | unique | optional |
| ---------------- | ------ | ------ | -------- |
| id               | int    | yes    | no       |
| user_name        | string | yes    | no       |
| email            | string | yes    | no       |
| hashed_password  | string | no     | no       |




### Portfolio stock

| name       | type            | unique | optional |
| -------    | --------------- | ------ | -------- |
| id         | int             | yes    | no       |
| account_id | ref to account  | yes    | no       |
| symbol     | string          | no     | yes      |
| num_shares | int             | no     | yes      |
| cost_basis | float           | no     | yes      |

Unique constraint on account_id, symbol.



### Saved news item

| name             | type            | unique | optional |
| ---------------- | --------------- | ------ | -------- |
| id               | int             | yes    | no       |
| account_id       | ref to account  | yes    | no       |
| title            | string          | no     | yes      |
| news_url         | string          | no     | yes      |
| time_published   | string          | no     | yes      |
| banner_image     | string          | no     | yes      |
| summary          | string          | no     | yes      |
| preference       | bool            | no     | yes      |

Unique constraint on account_id, news_url.


### Saved stock

| name       | type            | unique | optional |
| -------    | --------------- | ------ | -------- |
| id         | int             | yes    | no       |
| account_id | ref to account  | yes    | no       |
| symbol     | string          | no     | yes      |
| preference | bool            | yes    | yes      |

Unique constraint on account_id, symbol.
