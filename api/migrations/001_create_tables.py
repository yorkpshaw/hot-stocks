steps = [
    [
        """
    CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL
);
    """,
        """
    DROP TABLE users
    """,
    ],
    [
        """
    CREATE TABLE portfolio_stocks (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users("id") ON DELETE CASCADE,
    symbol VARCHAR(10) UNIQUE,
    num_shares SMALLINT,
    cost_basis FLOAT
);
    """,
        """
    DROP TABLE portfolio_stocks
    """,
    ],
    [
        """
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
    """,
        """
    DROP TABLE saved_news_items
    """,
    ],
    [
        """
    CREATE TABLE saved_stocks (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users("id") ON DELETE CASCADE,
    symbol VARCHAR(10) UNIQUE,
    preference BOOLEAN -- 0 = hate, 1 = heart
);
    """,
        """
    DROP TABLE saved_stock
    """,
    ],
]
