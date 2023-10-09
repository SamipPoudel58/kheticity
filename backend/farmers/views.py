from django.shortcuts import render
from .models import Farmer
from rest_framework.viewsets import ModelViewSet
from .serializers import FarmerSerializer

# Create your views here.
class FarmerViewSet(ModelViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer