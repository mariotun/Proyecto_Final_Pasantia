from rest_framework import viewsets

from ..models.medical_record import Medical_Record
from ..serializers.medical_record import Medical_RecordSerializer

class Medical_RecordViewSet(viewsets.ModelViewSet):
    queryset = Medical_Record.objects.all()
    serializer_class = Medical_RecordSerializer