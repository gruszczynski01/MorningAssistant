from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse
from ma_app.views import get_weather_from_web, get_news_from_web
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated  # <-- Here


class Weather(APIView):
	permission_classes = (IsAuthenticated,)             # <-- And here
	def get(self, request, sent_city):
		if request.method == 'GET':
			weather = get_weather_from_web(sent_city)
			return (JsonResponse(weather, safe=False))

class News(APIView):
	permission_classes = (IsAuthenticated,)             # <-- And here
	def get(self, request, sent_category):
		if request.method == 'GET':
			print(sent_category)
			news = get_news_from_web(sent_category)
			return (JsonResponse(news, safe=False))


