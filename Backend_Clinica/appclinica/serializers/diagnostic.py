from rest_framework import serializers
from ..models.diagnostic import Diagnostic,Diagnostic_Detail,Medical_Treatment

class DiagnosticSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diagnostic
        fields = '__all__'

class Diagnostic_DetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diagnostic_Detail
        fields = '__all__'

class Medical_TreatmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medical_Treatment
        fields = '__all__'