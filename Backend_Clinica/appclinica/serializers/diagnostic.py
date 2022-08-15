from rest_framework import serializers
from ..models.diagnostic import Diagnostic,Diagnostic_Detail,Medical_Treatment

class DiagnosticSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diagnostic
        fields = '__all__'
    
    def to_representation(self,instance):

        return{
            "id": instance.id,
            "name": instance.name,
            "description": instance.description,
            "date": instance.date,
            "hour": instance.hour,
            "total_cost": instance.total_cost,
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


class Diagnostic_DetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diagnostic_Detail
        fields = '__all__'

    def to_representation(self,instance):
        return{
            "id": instance.id,
            "finalized": instance.finalized,
            "status": instance.status,
            "diagnostic": {
                "name": instance.diagnostic.name,
                "client":{
                    "names": instance.diagnostic.client.names,
                    "phone_number": instance.diagnostic.client.phone_number
                }
            },
            "treatment": {
                "name": instance.treatment.name,
                "description": instance.treatment.description
            }
        }


class Medical_TreatmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medical_Treatment
        fields = '__all__'
