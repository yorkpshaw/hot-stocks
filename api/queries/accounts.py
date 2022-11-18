from pydantic import BaseModel

from queries.pool import pool


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    username: str
    password: str


class AccountOut(BaseModel):
    id: str
    username: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountQueries():

    def get(self, username: str) -> AccountOutWithPassword:
        with pool.connection () as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, username, hashed_password
                    FROM accounts
                    WHERE username = %s
                    """,
                    [username],
                )
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                return record

    def create(self, info: AccountIn, hashed_password: str) -> AccountOutWithPassword:
        with pool.connection () as conn:
            with conn.cursor() as cur:
                params = [
                    info.username,
                    hashed_password
                ]
                cur.execute(
                    """
                    INSERT INTO accounts (username, hashed_password)
                    VALUES (%s, %s)
                    RETURNING id, username, hashed_password
                    """,
                    params,
                )
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                return record
