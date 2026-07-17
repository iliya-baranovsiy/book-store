from authx import AuthX, AuthXConfig
from config.configurations import settings

config = AuthXConfig()
config.JWT_SECRET_KEY = settings.secret_jwt
config.JWT_ACCESS_COOKIE_NAME = settings.jwt_name
config.JWT_TOKEN_LOCATION = ["cookies"]


class JWT:
    def __init__(self):
        self.security = AuthX(config=config)

    def create_token(self, user_id: str):
        return self.security.create_access_token(uid=user_id)
