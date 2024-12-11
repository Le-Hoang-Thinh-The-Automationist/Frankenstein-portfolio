from django.contrib import admin

# UserAdmin:
# This class provides a default implementation for managing user models in the admin interface.
from django.contrib.auth.admin import UserAdmin
from .models import CustomerUser


# Register your models here.
class CustomerAdmin(UserAdmin):
    # add_fieldsets: This attribute is used to define the fields that will be displayed on
    # the user creation form in the admin interface. It is a tuple of fieldsets, where each
    # fieldset is a tuple containing a title, a dictionary of options, and a list of fields.
    add_fieldsets = (
        (
            # None means that there is no title for the fieldset
            None,
            {
                # "classes": ("wide",): Adds the wide CSS class
                #  to the fieldset for styling purposes. -> the class name for the object in html?
                "classes": ("wide",),
                # Specified the fields to be in included in the form
                "fields": (
                    "username",
                    "email",
                    "first_name",
                    "last_name",
                    "password",
                    "password2",
                    "city",
                    "district",
                    "address",
                    "phone_number",
                ),
            },
        ),
    )


# Register the CustomerUser through the CustomerAdmin
# For the register function:
#   Register the given model(s) with the given admin class.
#   The model(s) should be Model classes, not instances.
#   If an admin class isn't given, use ModelAdmin (the default admin options).
#   If keyword arguments are given -- e.g., list_display -- apply them as options to the admin class.
#   If a model is already registered, raise AlreadyRegistered.
#   If a model is abstract, raise ImproperlyConfigured.
admin.site.register(CustomerUser, CustomerAdmin)
