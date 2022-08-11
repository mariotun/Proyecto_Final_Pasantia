from django.db import models
from .person import Client,Employee


class Diagnostic(models.Model):
    name = models.CharField(max_length=50)
    description =  models.CharField(max_length=100)
    date = models.DateField() 
    hour = models.TimeField()
    client = models.ForeignKey(Client,on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee,on_delete=models.CASCADE)
    total_cost = models.IntegerField(null=True,blank=True)
    status= models.BooleanField(default=True)   

    def __str__(self):
        return f'Diagnostic: {self.name}'


class Medical_Treatment(models.Model):
    name = models.CharField(max_length=50)
    cost = models.IntegerField()
    description = models.CharField(max_length=100)
    status= models.BooleanField(default=True)

    def __str__(self):
        return f'Treatment: {self.name}'


class Diagnostic_Detail(models.Model):
    diagnostic = models.ForeignKey(Diagnostic,on_delete=models.CASCADE)
    treatment = models.ForeignKey(Medical_Treatment,on_delete=models.CASCADE)
    finalized = models.BooleanField(default=False)
    status= models.BooleanField(default=True)

    def __str__(self):
        return f'Detail: {self.diagnostic}'


