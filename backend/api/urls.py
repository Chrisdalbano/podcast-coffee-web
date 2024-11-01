from django.urls import path
from .views import EpisodeList, SubscriberCreate, unsubscribe

urlpatterns = [
    path("episodes/", EpisodeList.as_view(), name="episode-list"),
    path("subscribe/", SubscriberCreate.as_view(), name="subscriber-create"),
    path("unsubscribe/", unsubscribe, name="unsubscribe"),
]
