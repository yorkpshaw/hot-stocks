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
