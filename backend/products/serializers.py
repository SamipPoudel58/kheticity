from rest_framework import serializers
from .models import Product, DailyViews


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"