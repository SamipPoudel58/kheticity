from django.db import models
from users.models import User
from farmers.models import Farmer
# Create your models here.

class Article(models.Model):
    farmer_id = models.ForeignKey(Farmer, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    content = models.TextField()
    publishedDate = models.DateTimeField(auto_now=False, auto_now_add=True)
    

