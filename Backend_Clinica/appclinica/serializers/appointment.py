from rest_framework import serializers
from ..models.appointment import Client,Employee,Appointment,Absence,Backwardness 

'''class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__' '''

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

    def to_representation(self,instance):
        return{
            "id": instance.id,
            "date": instance.date,
            "hour": instance.hour,
            "status": instance.status,
            "client": {
                "names": instance.client.names,
                "phone_number": instance.client.phone_number
            },
            "employee": {
                "names": instance.employee.names,
                "age": instance.employee.age,
                "professional": instance.employee.professional.name
            }

        }

        
class AbsenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Absence
        fields = '__all__'
    
    def to_representation(self,instance):
        return{
            "id": instance.id,
            "date": instance.date,
            "hour": instance.hour,
            "status": instance.status,
            "description": instance.description,
            "client": {
                "names": instance.client.names,
                "phone_number": instance.client.phone_number
            },
            "employee": {
                "names": instance.employee.names,
                "age": instance.employee.age,
                "professional": instance.employee.professional.name
            }
        }

class BackwardnessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Backwardness
        fields = '__all__'

    def to_representation(self,instance):
        return{
            "id": instance.id,
            "date": instance.date,
            "hour": instance.hour,
            "status": instance.status,
            "description": instance.description,
            "client": {
                "names": instance.client.names,
                "phone_number": instance.client.phone_number
            },
            "employee": {
                "names": instance.employee.names,
                "age": instance.employee.age,
                "professional": instance.employee.professional.name
            }
        }