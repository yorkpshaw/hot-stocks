DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS explore_news_items;
DROP TABLE IF EXISTS explore_stocks;
DROP TABLE IF EXISTS portfolio_stocks;
DROP TABLE IF EXISTS saved_news_items;
DROP TABLE IF EXISTS saved_stocks;


CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL
);


CREATE TABLE explore_news_items (
    id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(5000),
    time_published VARCHAR(50),
    banner_image VARCHAR(5000),
    summary TEXT
);


CREATE TABLE explore_stocks (
    id SERIAL NOT NULL PRIMARY KEY,
    symbol VARCHAR(10),
    company_name VARCHAR(100),
    company_description TEXT
);


CREATE TABLE portfolio_stocks (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users("id") ON DELETE CASCADE,
    stock_id INT NOT NULL REFERENCES stocks("id") ON DELETE CASCADE,
    num_shares SMALLINT,
    cost_basis FLOAT
);

CREATE TABLE saved_news_items (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users("id") ON DELETE CASCADE,
    news_item_id INT NOT NULL REFERENCES news_items("id") ON DELETE CASCADE,
    preference BOOLEAN -- 0 = hate, 1 = heart
);

CREATE TABLE saved_stocks (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users("id") ON DELETE CASCADE,
    stock_id INT NOT NULL REFERENCES stocks("id") ON DELETE CASCADE,
    preference BOOLEAN -- 0 = hate, 1 = heart
);


INSERT INTO users VALUES
    (1, 'wpooh'),
    (2, 'ccat'),
    (3, 'twinky')
;

INSERT INTO explore_news_items VALUES
    (1, 'Best news title ever', '20201010', 'bannerimageurl.com', 'summarysummarysummarysummary'),
    (2, 'Worst news title ever', '19991010', 'woah.com', 'summarysummarysummarysummary'),
    (3, 'Okest news title ever', '20061010', 'sosocool.com', 'summarysummarysummarysummary')
;

INSERT INTO explore_stocks VALUES
    (1, 'AAPL'),
    (2, 'NFLX'),
    (3, 'AMZN')
;

INSERT INTO portfolio_stocks VALUES
    (1, 1, 1, '10', '100.00'),
    (2, 2, 2, '12', '100.00')
;

INSERT INTO saved_news_items VALUES
    (1, 2, 1, '0'),
    (1, 2, 3, '1')
;

INSERT INTO saved_stocks VALUES
    (1, 2, 1, '0'),
    (1, 2, 3, '1')
;
