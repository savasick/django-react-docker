from . import views
from django.urls import path

urlpatterns = [
    path('test/', views.send_some_data),
]