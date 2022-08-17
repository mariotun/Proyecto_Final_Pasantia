from rest_framework import generics
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


class OperacionesDiagnosticoView(generics.ListAPIView):
    serializer_class = DiagnosticSerializer


    def get_queryset(self): 
        # http://localhost:8000/api/v1/peopleserved/?start=2022-08-13&end=2022-08-16
        
        fecha_inicio = self.request.query_params['start']
        fecha_final = self.request.query_params['end']

        people_served = Diagnostic.objects.filter(date__range=[fecha_inicio,fecha_final])
        return people_served
        #print(fecha_inicio,fecha_final)