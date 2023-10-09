from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import ArticleSerializer
from .models import Article

# Create your views here.

class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer