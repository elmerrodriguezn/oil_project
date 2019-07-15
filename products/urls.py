from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('<str:default_code>/', views.single, name='single'),
    path('search', views.search)
]

