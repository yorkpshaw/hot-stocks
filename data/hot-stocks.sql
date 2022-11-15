DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INTEGER NOT NULL PRIMARY KEY,
    first TEXT NOT NULL,
    last TEXT NOT NULL,
    avatar TEXT NOT NULL,
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    referrer_id INTEGER REFERENCES users("id") ON DELETE CASCADE
)
