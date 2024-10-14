# podcasts/views.py
from rest_framework import generics
from .models import Episode, Subscriber
from .serializers import EpisodeSerializer, SubscriberSerializer

# View to list all episodes
class EpisodeList(generics.ListAPIView):
    queryset = Episode.objects.all()
    serializer_class = EpisodeSerializer

# View to collect and save subscribers
class SubscriberCreate(generics.CreateAPIView):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer
