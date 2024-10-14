from django.db import models


# Podcast Episode Model
class Episode(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    duration = models.CharField(max_length=10)

    def __str__(self):
        return self.title


# Subscriber Model
class Subscriber(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return self.email
