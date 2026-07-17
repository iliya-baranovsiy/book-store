from dataclasses import dataclass


@dataclass
class User:
    id: int
    name: str
    email: str
    hash_password: str
