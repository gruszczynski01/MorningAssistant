from django.contrib import admin
from django.urls import path, include, re_path
from ma_app.views import FrontendRenderView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('ma_app.api.urls')), 
    re_path(r'(?P<path>.*)', FrontendRenderView.as_view(), name = "home")
]                      
