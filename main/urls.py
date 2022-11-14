from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_page, name='mainpage'),
    path('test/', views.test_page, name='testpage')
]