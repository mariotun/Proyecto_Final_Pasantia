from rest_framework import serializers
from ..models.medical_record import Medical_Record

class Medical_RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medical_Record
        fields = '__all__'