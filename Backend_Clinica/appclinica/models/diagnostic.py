from django.db import models
from .person import Client,Employee


class Diagnostic(models.Model):
    name = models.CharField(max_length=50)
    description =  models.CharField(max_length=100)
    date = models.DateField() 
    hour = models.TimeField()
    client = models.ForeignKey(Client,on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee,on_delete=models.CASCADE)
    total_cost = models.IntegerField(default=0)
    status= models.BooleanField(default=True)   

    def __str__(self):
        return f'{self.name} - {self.client.names}'


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

    def agregar_costo(self):
        diagnostico = Diagnostic.objects.filter(id=self.diagnostic.id)
        tratamiento = Medical_Treatment.objects.get(id=self.treatment.id)
        #costos = Diagnostic_Detail.objects.filter(id=self.diagnostic.id )
        #Medical_Treatment.objects.filter(id=self.treatment.id)
        total =models.F('total_cost')+tratamiento.cost
        #print('Total: ',total)
        diagnostico.update(total_cost=total)
        #return total


    def save(self,*args,**kwargs):
        self.agregar_costo()
        super(Diagnostic_Detail,self).save(*args,**kwargs)
       