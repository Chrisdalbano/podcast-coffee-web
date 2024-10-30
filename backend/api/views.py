# podcasts/views.py
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
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


@api_view(["DELETE"])
def unsubscribe(request):
    email = request.data.get("email")
    if not email:
        return Response(
            {"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST
        )

    try:
        subscriber = Subscriber.objects.get(email=email)
        subscriber.delete()
        return Response({"message": "Unsuscribed correctly"}, status=status.HTTP_200_OK)
    except Subscriber.DoesNotExist:
        return Response(
            {"message": "Subscriber not found"}, status=status.HTTP_404_NOT_FOUND
        )
