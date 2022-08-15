from django.db import models

from .person import Client,Employee

class Appointment(models.Model): #cita
    date = models.DateField()
    hour = models.TimeField()
    #description =  models.CharField(max_length=100)
    client = models.ForeignKey(Client,on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee,on_delete=models.CASCADE)
    status= models.BooleanField(default=True)

    def __str__(self):
        return f'Date: {self.date}'


class Absence(Appointment): #inasistencia
    description =  models.CharField(max_length=100)
    #statusa= models.BooleanField(default=True)

    def __str__(self):
        return f'{self.description}'


class Backwardness(Appointment): #atraso
    description =  models.CharField(max_length=100)
    #statusb= models.BooleanField(default=True)

    def __str__(self):
        return f'{self.description}'