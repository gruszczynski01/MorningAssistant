import requests
from pprint import pprint
import os

city = "Legionowo"

#WEATHER API
weather_api_key = os.environ.get('MA_WEATHER_API_KEY') #get api key from enviromental variables
payload = {'q': city, 'APPID': weather_api_key, 'units': 'metric'}
url = 'http://api.openweathermap.org/data/2.5/weather?'
r = requests.get(url, params = payload).json()
temp = r['main']['temp']
desc = r['weather'][0]['description']
icon = r['weather'][0]['icon']
weather = {'city': city, 'temp': round(temp), 'desc': desc, 'icon': icon}
print(weather)
