from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token  
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import views as auth_views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('me', csrf_exempt(views.Profile.as_view()), name='profile'),
    path('tiles', views.Tiles.as_view(), name='tiles'),
    path('register', csrf_exempt(views.Register.as_view()), name='register'),
    path('obtain-token', obtain_auth_token, name='api_token_auth'),
    path('password-reset', auth_views.PasswordResetView.as_view()),
    path('password-reset-done', auth_views.PasswordResetDoneView.as_view(), name = "password_reset_done"),
    path('password-reset-confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name = "password_reset_confirm"),
    path('password-reset-complete', auth_views.PasswordResetCompleteView.as_view(), name = "password_reset_complete"),
]