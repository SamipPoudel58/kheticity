from django.shortcuts import render
from .models import Farmer
from rest_framework.viewsets import ModelViewSet
from .serializers import FarmerSerializer
from django.http import JsonResponse
# Create your views here.
class FarmerViewSet(ModelViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer

def dashboard(request):
    data = {'message': 'Hello, World!'}
    return JsonResponse(data)