import json
import requests
import os

ALPHAVANTAGE_API_KEY = os.environ["ALPHAVANTAGE_API_KEY"]


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

        url = f"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval=5min&apikey={ALPHAVANTAGE_API_KEY}"
        response = requests.get(url)
        content = json.loads(response.content)
        timeSeries = []
        try:
            timeSeries = content["Time Series (5min)"]
            for i in timeSeries:
                closePrice = {}
                closePrice["4. close"] = i["4. close"]
            return {
                closePrice
                }
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
                news_item["time_published"] = i["time_published"]
                news_item["summary"] = i["summary"]
                news_item["banner_image"] = i["banner_image"]
                news_items.append(news_item)
            return news_items
        except (KeyError, IndexError):
            return None
