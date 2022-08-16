from http import client
from django.db import models

from .diagnostic import Diagnostic
from .person import Client
from .appointment import Absence,Backwardness,Appointment

from datetime import datetime

class Medical_Record(models.Model):
    atencion = (('Urgencia','urgencia'),('Tratamiento','tratamiento'))
    superficie = (('M','M'),('O','O'),('D','D'))
    boleta = (('Cancelado','cancelado'),('No Cancelado','no cancelado'))
    asistencia = (('Asistio','asistio'),('No Asistio','no asistio'),('Atrasado','atrasado'))
    date = models.DateField()
    hour = models.TimeField()
    type_care = models.CharField(max_length=15,choices=atencion) #tipo cuidado
    part_treated = models.CharField(max_length=30) #pieza/parte a tratar
    surface = models.CharField(max_length=5,choices=superficie) #superficie
    indications = models.CharField(max_length=300)
    observations = models.CharField(max_length=200)
    ballot_status = models.CharField(max_length=15,choices=boleta) #estado boleta
    attendance_status = models.CharField(max_length=15,choices=asistencia) #estado asistencia
    diagnostic = models.ForeignKey(Diagnostic,on_delete=models.CASCADE)
    client = models.ForeignKey(Client,on_delete=models.CASCADE)
    status = models.BooleanField(default=True)

    def asignar_asistencia(self):
        now = datetime.now()
        estado = self.attendance_status
        # datos_cita = Appointment.objects.get(date=now.date())
        # print("---> Cita: ",datos_cita)
        if estado == 'No Asistio':
            Absence.objects.create(
                date= now.date(),
                hour= now.time(),
                status= True,
                description= f'Tratamiento de {self.client.names}',
                client= self.client,
                employee= self.diagnostic.employee
            )
           # ausencia.save(force_insert=True)
        
        elif estado == 'Atrasado':
            Backwardness.objects.create(
                date= now.date(),
                hour= now.time(),
                status= True,
                description= f'Tratamiento de {self.client.names}',
                client= self.client,
                employee= self.diagnostic.employee
            )

    def save(self,*args,**kwargs):
        self.asignar_asistencia()
        #super(Medical_Record,self).save(*args,**kwargs)