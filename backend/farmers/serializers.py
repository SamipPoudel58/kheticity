from rest_framework import serializers
from .models import Farmer
from products.serializers import ProductSerializer

class FarmerSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)

    class Meta:
        model = Farmer
        fields = ['id', 'user_id', 'farmName', 'description', 'latitude', 'longitude', 'contact', 'products']

