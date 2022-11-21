import json
import requests
import os

ALPHAVANTAGE_API_KEY = os.environ["ALPHAVANTAGE_API_KEY"]


def get_company(symbol):

    url = "https://www.alphavantage.co/query?function=OVERVIEW&symbol={symbol}&apikey={ALPHAVANTAGE_API_KEY}"
    response = requests.get(url)
    content = json.loads(response.content)

    try:
        return {
            "symbol": content["Symbol"],
            "name": content["Name"],
            "description": content["Description"],
        }
    except (KeyError, IndexError):
        return None


def get_stock(symbol):

    url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval=5min&apikey={ALPHAVANTAGE_API_KEY}"
    response = requests.get(url)
    content = json.loads(response.content)

    try:
        return {
            "": content[""]
            }
    except (KeyError, IndexError):
        return None


def get_all_news_items():

    url = "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=technology&apikey={ALPHAVANTAGE_API_KEY}"
    response = requests.get(url)
    content = json.loads(response.content)

    try:
        return {
            "title": content["Title"],
            "time_published": content["Time Published"],
            "banner_image": content["Banner Image"],
            "summary": content["Summary"],
            }
    except (KeyError, IndexError):
        return None
