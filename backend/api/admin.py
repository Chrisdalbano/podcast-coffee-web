# podcasts/admin.py
from django.contrib import admin
from .models import Episode, Subscriber

# Register your models here
admin.site.register(Episode)
admin.site.register(Subscriber)
