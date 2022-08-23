from rest_framework import viewsets
from rest_framework import generics

from ..models.appointment import Appointment,Absence,Backwardness
from ..serializers.appointment import AppointmentSerializer,AbsenceSerializer,BackwardnessSerializer


class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer


class AbsenceViewSet(viewsets.ModelViewSet):
    queryset = Absence.objects.all()
    serializer_class = AbsenceSerializer


class BackwardnessViewSet(viewsets.ModelViewSet):
    queryset = Backwardness.objects.all()
    serializer_class = BackwardnessSerializer

#***************************************
class ValidAppointmentView(generics.ListAPIView):
    serializer_class = AppointmentSerializer

    def get_queryset(self): 
        appointment = Appointment.objects.filter(status=True)
        return appointment