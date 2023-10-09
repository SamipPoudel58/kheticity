from django.db import models
from users.models import User
# Create your models here.

class Farmer(models.Model):
    user_id = models.OneToOneField(User, on_delete=models.CASCADE)
    farmName = models.CharField(max_length=250)
    description = models.CharField(max_length=300)
    latitude = models.FloatField()
    longitude = models.FloatField()
    contact = models.IntegerField()

    
