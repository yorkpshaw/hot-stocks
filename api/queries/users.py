from queries.pool import pool

class UserQueries:
    def get_all_users(self):
        with pool.connection () as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id, first, last, avatar, email, username
                    FROM users
                    ORDER BY last, first
                    """
                )
                results = []
                for row in db.fetchall():
                    record = {}
                    for i, column in enumerate(db.description):
                        record[column.name] = row[i]
                    results.append(record)
                return results
