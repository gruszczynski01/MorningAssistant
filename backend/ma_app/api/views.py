from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse
from ma_app.views import get_weather_from_web, get_news_from_web

def get_weather(request, sent_city):
	if request.method == 'GET':
		weather = get_weather_from_web(sent_city)
		return (JsonResponse(weather, safe=False))


def get_news(request, sent_category):
	if request.method == 'GET':
		print(sent_category)
		news = get_news_from_web(sent_category)
		return (JsonResponse(news, safe=False))
