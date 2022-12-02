import csv
import json
import requests
import os

ALPHAVANTAGE_API_KEY = os.environ["ALPHAVANTAGE_API_KEY"]
FMP_API_KEY = "d9d102aa66e8530a6ae66e89468b5aa1"


class ACLs:
    def get_company(symbol):

        url = f"https://www.alphavantage.co/query?function=OVERVIEW&symbol={symbol}&apikey={ALPHAVANTAGE_API_KEY}"
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

        url = f"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval=15min&apikey={ALPHAVANTAGE_API_KEY}"
        response = requests.get(url)
        content = json.loads(response.content)
        stock = {}
        try:
            time_series = content["Time Series (15min)"]
            for i in time_series:
                stock[i] = time_series[i]["4. close"]
            return stock
        except (KeyError, IndexError):
            return None

    def search_all_stocks(value):

        url = f"https://financialmodelingprep.com/api/v3/search?query={value}&limit=10&apikey={FMP_API_KEY}"
        response = requests.get(url)
        content = json.loads(response.content)
        stocks = []
        try:
            for i in content:
                if (
                    i["exchangeShortName"] == "NASDAQ"
                    or i["exchangeShortName"] == "NYSE"
                ):
                    stock = {}
                    stock["symbol"] = i["symbol"]
                    stock["name"] = i["name"]
                    stocks.append(stock)
            return stocks
        except (KeyError, IndexError):
            return None

    def get_all_stocks():

        url = (
            f"https://financialmodelingprep.com/api/v3/stock/list?apikey={FMP_API_KEY}"
        )
        response = requests.get(url)
        content = json.loads(response.content)
        stocks = []
        try:
            for i in content:
                if (
                    i["type"] == "stock"
                    and i["exchangeShortName"] == "NASDAQ"
                    or i["exchangeShortName"] == "NYSE"
                ):
                    stock = {}
                    stock["symbol"] = i["symbol"]
                    stock["name"] = i["name"]
                    stock["cost_current"] = i["price"]
                    stocks.append(stock)
            return stocks
        except (KeyError, IndexError):
            return None

    def get_all_news_items():

        url = f"https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=technology&apikey={ALPHAVANTAGE_API_KEY}"
        response = requests.get(url)
        content = json.loads(response.content)
        news_items = []
        try:
            feed = content["feed"]
            for i in feed:
                news_item = {}
                news_item["title"] = i["title"]
                news_item["news_url"] = i["url"]
                news_item["time_published"] = i["time_published"]
                news_item["summary"] = i["summary"]
                news_item["banner_image"] = i["banner_image"]
                news_items.append(news_item)
            return news_items
        except (KeyError, IndexError):
            return None
