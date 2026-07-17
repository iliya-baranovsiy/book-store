from passlib.context import CryptContext


class Hashing:
    def __init__(self):
        self.context = CryptContext(schemes=["argon2"], deprecated="auto")

    def to_hash(self, password: str):
        hash_password = self.context.hash(password)
        return hash_password

    def is_identical(self, password: str, db_password: str):
        return self.context.verify(
            password, db_password
        )
