from django.db import models

"""
AbstractUser: 
Provide the basic and full implmentation for the default User Model, including fields like: 
    - username
    - password
    - email
    - first name
    - last name
It also includes methods for authentication and user management.
"""
from django.contrib.auth.models import AbstractUser


# Create your models here.


class CustomerUser(AbstractUser):
    # Adress info are needed for delivery
    # The `username` is not allowed because the AbstractUser has already declared it.

    # Adress info are needed for delivery
    city = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10, blank=True)

    def __str__(self):
        return f"User {self.username}"
