# Data models

## Hot Stocks monolith

---

### Account

| name             | type   | unique | optional |
| ---------------- | ------ | ------ | -------- |
| name             | string | yes    | no       |
| product_type     | string | no     | no       |
| product_category | string | no     | no       |
| size             | string | no     | no       |
| sku              | string | yes    | no       |
| price            | int    | no     | no       |
| scent1           | string | no     | no       |
| scent2           | string | no     | no       |
| quantity         | int    | no     | no       |
| image            | string | no     | no       |
| description      | string | no     | no       |



### Portfolio stock

| name    | type                        | unique | optional |
| ------- | --------------------------- | ------ | -------- |
| user    | reference to user entity    | true   | false    |
| product | reference to product entity | true   | true     |



### Saved news item

| name        | type                        | unique | optional |
| ----------- | --------------------------- | ------ | -------- |
| import_href | reference to Product entity | yes    | no       |
| name        | reference to Product entity | no     | no       |
| sku         | reference to Product entity | yes    | no       |
| price       | reference to Product entity | no     | no       |
| image       | reference to Product entity | no     | no       |


### Saved stock

| name     | type                     | unique | optional |
| -------- | ------------------------ | ------ | -------- |
| answer_1 | string                   | no     | no       |
| answer_2 | string                   | no     | no       |
| answer_3 | string                   | no     | no       |
| answer_4 | string                   | no     | no       |
| answer_5 | string                   | no     | no       |
| created  | datetime                 | no     | no       |
| user     | reference to User entity | no     | no       |
