from rest_framework import viewsets
from rest_framework import generics

from ..models.person import Client,Professional,Employee
from ..serializers.person import ClientSerializer,EmployeeSerializer,ProfessionalSerializer

from django.db.models import Q


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class ProfessionalViewSet(viewsets.ModelViewSet):
    queryset = Professional.objects.all()
    serializer_class = ProfessionalSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

# ********************************************************
class ValidPersonView(generics.ListAPIView):
    serializer_class = ClientSerializer

    def get_queryset(self): 
        clients = Client.objects.filter(status=True)
        return clients

class ValidProfessionalView(generics.ListAPIView):
    serializer_class = ProfessionalSerializer

    def get_queryset(self): 
        clients = Professional.objects.filter(status=True)
        return clients

class ValidEmployeeView(generics.ListAPIView):
    serializer_class = EmployeeSerializer

    def get_queryset(self): 
        employee = Employee.objects.filter(status=True)
        return employee

class LoginView(generics.ListAPIView):
    # http://localhost:8000/api/v1/login/?email=raul@gmail.com&password=raul123
    
    serializer_class = EmployeeSerializer

    def get_queryset(self):
        email_user = self.request.query_params['email']
        password_user = self.request.query_params['password']

        user = Employee.objects.filter(Q(email=email_user) & Q(password=password_user))

        return user