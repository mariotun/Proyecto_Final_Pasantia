from django.db import models

from .diagnostic import Diagnostic
from .person import Client

class Medical_Record(models.Model):
    atencion = (('Urgencia','urgencia'),('Tratamiento','tratamiento'))
    superficie = (('M','M'),('O','O'),('D','D'))
    boleta = (('Cancelado','cancelado'),('No Cancelado','no cancelado'))
    asistencia = (('Asistio','asistio'),('No Asistio','no asistio'),('Atrasado','atrasado'))
    date = models.DateField()
    hour = models.TimeField()
    type_care = models.CharField(max_length=10,choices=atencion) #tipo cuidado
    part_treated = models.CharField(max_length=30) #pieza/parte a tratar
    surface = models.CharField(max_length=5,choices=superficie) #superficie
    indications = models.CharField(max_length=300)
    observations = models.CharField(max_length=200)
    ballot_status = models.CharField(max_length=15,choices=boleta) #estado boleta
    attendance_status = models.CharField(max_length=15,choices=asistencia) #estado asistencia
    diagnostic = models.ForeignKey(Diagnostic,on_delete=models.CASCADE)
    client = models.ForeignKey(Client,on_delete=models.CASCADE)
    status = models.BooleanField(default=True)

    