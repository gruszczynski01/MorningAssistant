from django.urls import path
from . import views

urlpatterns = [
    path('weather/<sent_city>', views.Weather.as_view()),
    path('news/<sent_category>', views.News.as_view()),
]