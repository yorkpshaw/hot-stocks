from fastapi import APIRouter, Depends #
from pydantic import BaseModel
from typing import List
from queries.users import UserQueries

router = APIRouter()

class UserOut(BaseModel):
    id: int
    username: str

class UsersOut(BaseModel):
    users: List[UserOut]


@router.get("/api/users", response_model = UsersOut)
def users_list(queries: UserQueries = Depends()):
    return {
        "users": queries,
    }
