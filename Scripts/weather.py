import requests
from pprint import pprint
import os

city = "Legionowo"
country = "pl"

#WEATHER API
weather_api_key = os.environ.get('WEATHER_API_KEY') #get api key from enviromental variables
payload = {'q': city, 'APPID': weather_api_key, 'units': 'metric'}#prepare params json
url = f'http://api.openweathermap.org/data/2.5/weather?'
r = requests.get(url, params = payload)
r_dict = r.json()
pprint(r_dict)
temp = r_dict['main']['temp']
print(temp)

#NEWS API
news_api_key = os.environ.get('NEWS_API_KEY') #get api key from enviromental variables
payload = {'country': 'pl', 'category': 'general', 'apiKey':news_api_key}
url2 = f'https://newsapi.org/v2/top-headlines'
r2 = requests.get(url2, params=payload)
r_dict2 = r2.json()

for article in r_dict2['articles']:
    print(article['content'])
    print()
