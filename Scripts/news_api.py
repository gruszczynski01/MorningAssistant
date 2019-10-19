import requests
import os

#NEWS API
news_api_key = os.environ.get('MA_NEWS_API_KEY') #get api key from enviromental variables
payload = {'country': 'pl', 'category': 'general', 'apiKey':news_api_key, 'pageSize': 4}
url = 'https://newsapi.org/v2/top-headlines'
r = requests.get(url, params=payload).json()


articles = []

for article in r['articles']:
	title = article['title']
	desc = article['description']
	url = article['url']
	imageToUrl = article['urlToImage']
	articles.append({'title': title, 'desc': desc, 'url': url, 'imageToUrl': imageToUrl})

print(articles)

