from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token  # <-- Here

urlpatterns = [
    path('weather/<sent_city>', views.Weather.as_view()),
    path('news/<sent_category>', views.News.as_view()),
    path('obtain-token', obtain_auth_token, name='api_token_auth'),  # <-- And here

]


