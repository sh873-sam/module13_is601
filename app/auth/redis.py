# app/auth/redis.py

from typing import Optional

# Temporary in-memory fallback so auth works without aioredis/Redis.
# This is enough for local development and this assignment.
_TOKEN_BLACKLIST = set()


async def add_to_blacklist(token: str, expires_at: Optional[int] = None) -> bool:
    _TOKEN_BLACKLIST.add(token)
    return True


async def is_blacklisted(token: str) -> bool:
    return token in _TOKEN_BLACKLIST