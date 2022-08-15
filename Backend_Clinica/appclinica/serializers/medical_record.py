from rest_framework import serializers
from ..models.medical_record import Medical_Record

class Medical_RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medical_Record
        fields = '__all__'
    
    def to_representation(self,instance):
       
        return{
            "id": instance.id,
            "date": instance.date,
            "hour": instance.hour,
            "type_care": instance.type_care,
            "part_treated": instance.part_treated,
            "surface": instance.surface,
            "indications": instance.indications,
            "observations": instance.observations,
            "ballot_status": instance.ballot_status,
            "attendance_status": instance.attendance_status,
            "status": instance.status,
            "diagnostic": {
                "name": instance.diagnostic.name,
                "client":{
                    "names": instance.diagnostic.client.names,
                    "phone_number": instance.diagnostic.client.phone_number
                }
            },
            "client": {
                        "names": instance.diagnostic.client.names,
                        "phone_number": instance.diagnostic.client.phone_number
                }
        }