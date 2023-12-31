from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FarmerViewSet, dashboard

router = DefaultRouter()
router.register(r'farmers', FarmerViewSet, basename='farmer')

urlpatterns = [
    path('api/', include(router.urls)),
    path('dashboard/', dashboard, name="dashboard")
]

