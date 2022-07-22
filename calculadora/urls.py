from django.urls import path
from calculadora.views import Home

app_name = 'calculadora_urls'

urlpatterns = [
    path('', Home.as_view(), name='general-duplicate'),
]
