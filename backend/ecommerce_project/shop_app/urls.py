from django.urls import path, include
from . import views

urlpatterns = [
    path("products", views.product_view, name="product"),
]
