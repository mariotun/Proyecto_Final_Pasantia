from pyexpat import model
from rest_framework import serializers
from ..models.person import Client,Employee,Professional

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'
    
    def to_representation(self,instance):
        return{
            "id": instance.id,
            "cui" : instance.cui,
            "names" : instance.names,
            "last_names" : instance.last_names,
            "phone_number": instance.phone_number,
            "address" : instance.address,
            "age" : instance.age,
            "birthday" : instance.birthday,
            "email" : instance.email,
            "password" : instance.password,
            "professional":instance.professional.name,
            "input_date" : instance.input_date,
            "status": instance.status
            
        }

class ProfessionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professional
        fields = '__all__'