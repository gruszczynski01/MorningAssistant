from django.views.generic import View
from django.shortcuts import render
import os 
import requests
from requests_html import HTML, HTMLSession
from pprint import pprint

class FrontendRenderView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "home.html", {})


def get_weather_from_web(city):
    weather_api_key = os.environ.get('MA_WEATHER_API_KEY') #get api key from enviromental variables

    payload = {'q': city, 'APPID': weather_api_key, 'units': 'metric'}
    url = 'http://api.openweathermap.org/data/2.5/weather?'
    r = requests.get(url, params = payload)
    status = r.status_code
    r = r.json()
    if status == 200:
        temp = r['main']['temp']
        desc = r['weather'][0]['description']
        # icon = 'http://openweathermap.org/img/wn/' + r['weather'][0]['icon'] + '@2x.png'
        icon = r['weather'][0]['icon']
        weather = {'city': city, 'temp': round(temp), 'desc': desc, 'icon': icon, 'status': status}
    else :
        weather = {'status': status }
    return weather

def get_news_from_web(category):
    news_api_key = os.environ.get('MA_NEWS_API_KEY') #get api key from enviromental variables
    payload = {'country': 'pl', 'category': category, 'apiKey':news_api_key, 'pageSize': 4}
    url = 'https://newsapi.org/v2/top-headlines'
    r = requests.get(url, params=payload)
    status = 200
    if r.json()['totalResults'] == 0:
        status = 404
    r = r.json()
    articles = []
    if status == 200:
        for article in r['articles']:
            title = article['title']
            desc = article['description']
            url = article['url']
            imageToUrl = article['urlToImage']
            articles.append({'status': status, 'title': title, 'desc': desc, 'url': url, 'imageToUrl': imageToUrl})
    else:
        articles.append({'status': status})
    return articles
