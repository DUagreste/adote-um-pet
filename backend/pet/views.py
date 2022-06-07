from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from .models import Pet
from .serializers import PetSerializer


class PetList(APIView):
    def get(self, request, format=None):
        pets = Pet.objects.all()
        serializers = PetSerializer(pets, many=True)
        return Response(serializers.data, status=HTTP_200_OK)
