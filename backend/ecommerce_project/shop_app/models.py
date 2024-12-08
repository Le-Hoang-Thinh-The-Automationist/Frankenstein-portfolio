from django.db import models
from django.utils.text import slugify


# Create your models here.
class Product(models.Model):
    CATEGORY = (
        ("Electronics", "ELECTRONICS"),
        ("Groceries", "GROCERIES"),
        ("Clothings", "CLOTHINGS"),
    )
    #
    name = models.CharField(max_length=100)
    # SlugField is used to create a slug for the URL
    slug = models.SlugField(blank=True, null=True)
    # ImageField is a FileField. The images will be uploaded to the URL './img'
    # the upload can either be:
    #   1. string type
    #   2. Callback function with two argument instance and
    #      filename that should return the string value
    image = models.ImageField(upload_to="img")
    #
    description = models.TextField(blank=True, null=True)
    #
    price = models.DecimalField(max_digits=10, decimal_places=2)
    #
    category = models.CharField(max_length=15, choices=CATEGORY, blank=True, null=True)

    def __str__(self) -> str:
        return self.name

    def save(self, *args, **kwargs) -> None:
        """
        When save, the function will automatically create a unique slug for the product URL
        """
        if not self.slug:
            self.slug = slugify(self.name)
            unique_slug = self.slug

            counter = 1

            # Check if there any other product has the same slug URL
            if Product.objects.filter(slug=unique_slug).exists():
                unique_slug = f"{self.slug}-{counter}"
                counter += 1
            self.slug = unique_slug

            super().save(*args, **kwargs)
