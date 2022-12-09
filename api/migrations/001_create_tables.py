steps = [
    [
        ## Create table
        """
        CREATE TABLE IF NOT EXISTS accounts (
            id SERIAL NOT NULL PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            email VARCHAR(200) NOT NULL UNIQUE,
            hashed_password VARCHAR(500) NOT NULL
        );
        """,
        ## Drop table
        """
        DROP TABLE accounts;
        """
    ],
    [
        ## Create table
        """
        CREATE TABLE IF NOT EXISTS portfolio_stocks (
            id SERIAL NOT NULL PRIMARY KEY,
            account_id INT NOT NULL REFERENCES accounts("id") ON DELETE CASCADE,
            symbol VARCHAR(10),
            num_shares SMALLINT,
            cost_basis FLOAT,
            CONSTRAINT check_account_portfolio UNIQUE (account_id, symbol)
        );
        """,
        ## Drop table
        """
        DROP TABLE portfolio_stocks;
        """
    ],
    [
        ## Create table
        """
        CREATE TABLE IF NOT EXISTS saved_news_items (
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
        """,
        ## Drop table
        """
        DROP TABLE saved_news_items;
        """
    ],
    [
        ## Create table
        """
        CREATE TABLE IF NOT EXISTS saved_stocks (
            id SERIAL NOT NULL PRIMARY KEY,
            account_id INT NOT NULL REFERENCES accounts("id") ON DELETE CASCADE,
            symbol VARCHAR(10),
            preference BOOLEAN, -- 0 = hate, 1 = heart
            CONSTRAINT check_account_saved UNIQUE (account_id, symbol)
        );
        """,
        ## Drop table
        """
        DROP TABLE saved_stocks;
        """
    ],
]
