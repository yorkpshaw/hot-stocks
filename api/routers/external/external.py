from fastapi import APIRouter
from .acls import ACLs


router = APIRouter()


@router.get("/api/companies/{symbol}/")
def get_company(symbol: str):
    return {
        "company": ACLs.get_company(symbol),
    }


@router.get("/api/stocks/{symbol}/")
def get_stock(symbol: str):
    return {
        "stock": ACLs.get_stock(symbol),
    }


@router.get("/api/stocks")
def get_all_stocks(value=None):
    if value and value != "":
        return {
            "stocks": ACLs.search_all_stocks(value),
        }
    return {
        "stocks": ACLs.get_all_stocks(),
    }


@router.get("/api/news_items")
def get_all_news_items():
    return {
        "news_items": ACLs.get_all_news_items(),
    }
