from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token  
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('me', views.Profile.as_view(), name='profile'),
    path('tiles', views.Tiles.as_view(), name='tiles'),
    path('register', csrf_exempt(views.Register.as_view()), name='register'),
]