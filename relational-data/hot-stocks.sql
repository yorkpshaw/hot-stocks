DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS portfolio_stocks;
DROP TABLE IF EXISTS saved_news_items;
DROP TABLE IF EXISTS saved_stocks;


CREATE TABLE accounts (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    hashed_password VARCHAR(50) NOT NULL,
);


CREATE TABLE portfolio_stocks (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users("id") ON DELETE CASCADE,
    symbol VARCHAR(10) UNIQUE,
    num_shares SMALLINT,
    cost_basis FLOAT
);

CREATE TABLE saved_news_items (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users("id") ON DELETE CASCADE,
    title VARCHAR(5000),
    news_url VARCHAR(5000),
    time_published VARCHAR(50),
    banner_image VARCHAR(5000),
    summary TEXT,
    preference BOOLEAN -- 0 = hate, 1 = heart
);

CREATE TABLE saved_stocks (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users("id") ON DELETE CASCADE,
    symbol VARCHAR(10) UNIQUE,
    preference BOOLEAN -- 0 = hate, 1 = heart
);


INSERT INTO accounts VALUES
    (1, 'wpooh', 'asldkj12089'),
    (2, 'ccat', 'asd2`1897hdas'),
    (3, 'twinky', '098adslkj18')
;

INSERT INTO portfolio_stocks VALUES
    (1, 1, 'AAPL', '2', '100.00'),
    (2, 2, 'NFLX', '3', '100.00')
;

INSERT INTO saved_news_items VALUES
    (1, 2, 'Best news article', '20201010', 'bestnews.img', 'summarysummarysummary', '1'),
    (2, 2, 'Worst news article', '20201012', 'worstnews.img', 'summarysummarysummary', '0')
;

INSERT INTO saved_stocks VALUES
    (1, 2, 'AAPL', '0'),
    (2, 2, 'NFLX', '1')
;
