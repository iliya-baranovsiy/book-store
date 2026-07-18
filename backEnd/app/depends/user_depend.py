from typing import Any
from fastapi import Depends
from fastapi.exceptions import HTTPException
from core.auth.jwt import jwt
from busines_logic.services.user_auth_service import UserAuthService


async def get_current_user(payload: Any = Depends(jwt.security.access_token_required)):
    uid = payload.sub
    is_user = await UserAuthService().is_user_exists(id=int(uid))
    if not is_user:
        raise HTTPException(status_code=401)
    return is_user
