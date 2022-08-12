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

class AbsenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Absence
        fields = '__all__'

class BackwardnessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Backwardness
        fields = '__all__'