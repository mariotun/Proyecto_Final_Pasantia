from rest_framework import viewsets
from rest_framework import generics

from ..models.person import Client,Professional,Employee
from ..serializers.person import ClientSerializer,EmployeeSerializer,ProfessionalSerializer


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class ProfessionalViewSet(viewsets.ModelViewSet):
    queryset = Professional.objects.all()
    serializer_class = ProfessionalSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class ValidPersonView(generics.ListAPIView):
    serializer_class = ClientSerializer

    def get_queryset(self): 
        clients = Client.objects.filter(status=True)
        return clients
