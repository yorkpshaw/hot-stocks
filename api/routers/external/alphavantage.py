from fastapi import APIRouter


from .acls import (
    get_company,
    get_stock,
    get_all_news_items
)

router = APIRouter()


@router.get("/api/companies/{symbol}/")
def get_company(symbol: str):
    return {
        "company": get_company(symbol),
    }


@router.get("/api/stocks/{symbol}/")
def get_stock(symbol: str):
    return {
        "stock": get_stock(symbol),
    }


@router.get("/api/news_items")
def get_all_news_items():
    return {
        "news_items": get_all_news_items(),
    }
