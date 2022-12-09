import json
import requests
import os


ALPHAVANTAGE_API_KEY = os.environ["ALPHAVANTAGE_API_KEY"]
FMP_API_KEY = os.environ["FMP_API_KEY"]

ALPHAVANTAGE_SERVICE = os.environ["ALPHAVANTAGE_SERVICE"]
FMP_SERVICE = os.environ["FMP_SERVICE"]


class ACLs:
    def get_company(symbol):

        url = f"{ALPHAVANTAGE_SERVICE}/query?function=OVERVIEW&symbol={symbol}&apikey={ALPHAVANTAGE_API_KEY}"  # noqa: E501
        response = requests.get(url)
        content = json.loads(response.content)

        try:
            return {
                "symbol": content.get("Symbol"),
                "name": content.get("Name"),
                "description": content.get("Description"),
            }
        except (KeyError, IndexError):
            return None

    def get_stock(symbol):

        url = f"{ALPHAVANTAGE_SERVICE}/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval=15min&apikey={ALPHAVANTAGE_API_KEY}"  # noqa: E501
        response = requests.get(url)
        content = json.loads(response.content)
        stock = {}
        try:
            time_series = content.get("Time Series (15min)")
            for index, i in enumerate(time_series):
                if index <= 32:
                    stock[i] = time_series[i]["4. close"]
                else:
                    break
            return stock
        except (KeyError, IndexError):
            return None

    def search_all_stocks(value):

        url = f"{FMP_SERVICE}/api/v3/search?query={value}&limit=10&apikey={FMP_API_KEY}"  # noqa: E501
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
                    stock["symbol"] = i.get("symbol")
                    stock["name"] = i.get("name")
                    stocks.append(stock)
            return stocks
        except (KeyError, IndexError):
            return None

    def get_all_stocks():

        url = f"{FMP_SERVICE}/api/v3/stock/list?apikey={FMP_API_KEY}"
        response = requests.get(url)
        content = json.loads(response.content)
        stocks = []
        try:
            for i in content:
                if (
                    i.get("type") == "stock"
                    and i.get("price")
                    and (
                        i["exchangeShortName"] == "NASDAQ"
                        or i["exchangeShortName"] == "NYSE"
                    )
                ):
                    stock = {}
                    stock["symbol"] = i.get("symbol")
                    stock["name"] = i.get("name")
                    stock["cost_current"] = i.get("price")
                    stocks.append(stock)
            return stocks
        except (KeyError, IndexError):
            return None

    def get_all_news_items():

        url = f"{ALPHAVANTAGE_SERVICE}/query?function=NEWS_SENTIMENT&topics=technology&apikey={ALPHAVANTAGE_API_KEY}"  # noqa: E501
        response = requests.get(url)
        content = json.loads(response.content)
        news_items = []
        try:
            feed = content["feed"]
            for i in feed:
                news_item = {}
                news_item["title"] = i.get("title")
                news_item["news_url"] = i.get("url")
                news_item["time_published"] = i.get("time_published")
                news_item["summary"] = i.get("summary")
                news_item["banner_image"] = i.get("banner_image")
                news_items.append(news_item)
            return news_items
        except (KeyError, IndexError):
            return None
