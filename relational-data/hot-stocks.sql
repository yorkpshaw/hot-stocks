DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS portfolio_stocks;
DROP TABLE IF EXISTS saved_news_items;
DROP TABLE IF EXISTS saved_stocks;


CREATE TABLE accounts (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(200) NOT NULL UNIQUE,
    hashed_password VARCHAR(500) NOT NULL
);


CREATE TABLE portfolio_stocks (
    id SERIAL NOT NULL PRIMARY KEY,
    account_id INT NOT NULL REFERENCES accounts("id") ON DELETE CASCADE,
    symbol VARCHAR(10),
    num_shares SMALLINT,
    cost_basis FLOAT,
    CONSTRAINT check_account_portfolio UNIQUE (account_id, symbol)
);

CREATE TABLE saved_news_items (
    id SERIAL NOT NULL PRIMARY KEY,
    account_id INT NOT NULL REFERENCES accounts("id") ON DELETE CASCADE,
    title VARCHAR(5000),
    news_url VARCHAR(5000),
    time_published VARCHAR(50),
    banner_image VARCHAR(5000),
    summary TEXT,
    preference BOOLEAN, -- 0 = hate, 1 = heart
    CONSTRAINT check_account_url UNIQUE (account_id, news_url)

);

CREATE TABLE saved_stocks (
    id SERIAL NOT NULL PRIMARY KEY,
    account_id INT NOT NULL REFERENCES accounts("id") ON DELETE CASCADE,
    symbol VARCHAR(10),
    preference BOOLEAN, -- 0 = hate, 1 = heart
    CONSTRAINT check_account_saved UNIQUE (account_id, symbol)

);


INSERT INTO accounts VALUES
    (0, 'wpooh', 'wpooh@gmail.com', 'asldkj12089'),
    (1, 'ccat', 'ccat@gmail.com', 'asd2`1897hdas'),
    (2, 'twinky', 'twinky@gmail.com', '098adslkj18')
;

INSERT INTO portfolio_stocks VALUES
    (0, 1, 'AAPL', '2', '100.00'),
    (1, 2, 'NFLX', '3', '100.00'),
    (2, 2, 'AAPL', '1', '100.00')
;

INSERT INTO saved_news_items VALUES
    (0, 2, 'Best news article', '20201010', 'bestnews.img', 'summarysummarysummary', '1'),
    (1, 2, 'Worst news article', '20201012', 'worstnews.img', 'summarysummarysummary', '0')
;

INSERT INTO saved_stocks VALUES
    (0, 2, 'AAPL', '0'),
    (1, 2, 'NFLX', '1')
;
