DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS news_items;
DROP TABLE IF EXISTS stocks;
DROP TABLE IF EXISTS portfolio;
DROP TABLE IF EXISTS lists;


CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username TEXT NOT NULL
)


CREATE TABLE news_items (
    id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(5000),
    time_published VARCHAR(50),
    banner_image VARCHAR(5000),
    summary TEXT
)


CREATE TABLE stocks (
    id SERIAL NOT NULL PRIMARY KEY,
    symbol VARCHAR(10)
)


CREATE TABLE portfolio (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id SMALLINT REFERENCES users("id") ON DELETE CASCADE,
    stock_id VARCHAR(5) REFERENCES stocks("id") ON DELETE CASCADE,
    num_shares SMALLINT,
    cost_basis FLOAT
)

CREATE TABLE lists (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id SMALLINT REFERENCES users("id") ON DELETE CASCADE,
    item_id REFERENCES stocks("id") ON DELETE CASCADE // REFERENCES news_items("id") ON DELETE CASCADE,
    item_type SMALLINT(10,3),
    preference VARCHAR(50) check(preference='hate' or preference='heart')
)


INSERT INTO users VALUES
    (1, 'wpooh'),
    (2, 'ccat'),
    (3, 'twinky')
;

INSERT INTO news_items VALUES
    (1, 'Best news title ever', '20201010', 'bannerimageurl.com', 'summarysummarysummarysummary'),
    (2, 'Worst news title ever', '19991010', 'woah.com', 'summarysummarysummarysummary'),
    (3, 'Okest news title ever', '20061010', 'sosocool.com', 'summarysummarysummarysummary')
;

INSERT INTO stocks VALUES
    (1, 'AAPL'),
    (2, 'NFLX')
;

INSERT INTO portfolio VALUES
    (1, 1, 1, 10, ),
    (2, 'NFLX')
;
