import imp
from rest_framework import viewsets

from ..models.diagnostic import Diagnostic,Diagnostic_Detail,Medical_Treatment
from ..serializers.diagnostic import DiagnosticSerializer,Diagnostic_DetailSerializer,Medical_TreatmentSerializer


class DiagnosticViewSet(viewsets.ModelViewSet):
    queryset = Diagnostic.objects.all()
    serializer_class = DiagnosticSerializer


class Diagnostic_DetailViewSet(viewsets.ModelViewSet):
    queryset = Diagnostic_Detail.objects.all()
    serializer_class = Diagnostic_DetailSerializer


class Medical_TreatmentViewSet(viewsets.ModelViewSet):
    queryset = Medical_Treatment.objects.all()
    serializer_class = Medical_TreatmentSerializer