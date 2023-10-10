from django.db import models
from farmers.models import Farmer

from django.utils import timezone

# Create your models here.
class Product(models.Model):
    farmer_id = models.ForeignKey(Farmer, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=250)
    description = models.TextField()
    price = models.IntegerField()
    unit = models.CharField(max_length=250)
    quantity = models.IntegerField()
    availabilityDate = models.DateTimeField(auto_now=True)
    productImg = models.ImageField(upload_to='product_images/')

class DailyViews(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    date = models.DateField(default=timezone.now)
    views = models.IntegerField(default=0)

