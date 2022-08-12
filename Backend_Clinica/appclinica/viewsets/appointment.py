from rest_framework import viewsets

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