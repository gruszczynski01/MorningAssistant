from django.urls import path
from . import views

urlpatterns = [
    path('getWeather/<sent_city>', views.get_weather),
    path('getNews/<sent_category>', views.get_news),
]
