from django.db import models
import string
import random


def generate_unique_code() -> str:
    length = 6

    while True:
        code = "".join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break

    return code


# Create your models here.


# A Django model is a built-in feature that Django uses
# to create tables, their fields, and various constraints
# in a database. Essentially, Django models are Python classes
# that map to a single database table. Each attribute of the
# model represents a database field, and Django provides an
# automatically generated database-access API to interact with
# these tables
class Room(
    #
    models.Model,
):
    # The data column
    code = models.CharField(max_length=8, default="", unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    create_at = models.DateTimeField(auto_created=True)
