from django.db.models import F, ExpressionWrapper, fields, F, FloatField
from django.db.models.functions import ACos, Cos, Radians, Sin

from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .models import Farmer
from .serializers import FarmerSerializer

class FarmerViewSet(ModelViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer

    @action(detail=False, methods=['GET'])
    def nearby_farmers(self, request):
        consumer_latitude = float(request.query_params.get('lat'))
        consumer_longitude = float(request.query_params.get('lon'))

        # Haversine Formula to calculate distance
        distance_expression = (
            ACos(
                Cos(Radians(consumer_latitude)) * Cos(Radians(F('latitude'))) *
                Cos(Radians(F('longitude')) - Radians(consumer_longitude)) +
                Sin(Radians(consumer_latitude)) * Sin(Radians(F('latitude')))
            ) * 6371  # Earth radius in kilometers
        )

        

        # Filter farmers within 500 meters
        nearby_farmers = self.queryset.annotate(distance=ExpressionWrapper(distance_expression, output_field=FloatField())).filter(distance__lte=0.5)
        
        nearby_farmers = nearby_farmers.prefetch_related('products')

        

        serializer = self.get_serializer(nearby_farmers, many=True)

        response_data = {
            'nearby_farmers': serializer.data,
            'nearby_products': {farmer_data['id']: farmer_data['products'] for farmer_data in serializer.data}
        }
        return Response(response_data)

    #def list(self, request, *args, **kwargs):
        # Get user's latitude and longitude from query parameters
        #user_latitude = float(self.request.query_params.get('latitude'))
        #user_longitude = float(self.request.query_params.get('longitude'))

        # Create a Point object from user's coordinates
        #user_location = Point(user_longitude, user_latitude, srid=4326)

        # Calculate distance in meters using Django's Distance function
        #distance_expression = Distance('location', user_location)
        #queryset = Farmer.objects.annotate(distance=distance_expression).filter(distance__lte=500)

        #self.queryset = queryset

        #return super().list(request, *args, **kwargs)

def dashboard(request):
    data = {'message': 'Hello, World!'}
    return JsonResponse(data)