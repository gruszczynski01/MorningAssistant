from django.shortcuts import render
import os
import requests 
from .models import City
from django.http import HttpResponse, JsonResponse


# Create your views here.
def index(request):
    weather_api_key = os.environ.get('WEATHER_API_KEY') #get api key from enviromental variables
    url = 'http://api.openweathermap.org/data/2.5/weather?'
    weather = []
    cities = []
    cities = City.objects.all()

    for city in cities:
        payload = {'q': city.name, 'APPID': weather_api_key, 'units': 'metric'}#prepare params json
        r = requests.get(url, params = payload).json()        
        temp = r['main']['temp']
        desc = r['weather'][0]['description']
        icon = r['weather'][0]['icon']

        weather_city = {'city': city.name, 'temp': round(temp), 'desc':desc, 'icon': icon}
        weather.append(weather_city)
        
    context = {'weather': weather}
    return JsonResponse(context, safe=False)
    # return render(request, 'app_weather/weather.html', context)