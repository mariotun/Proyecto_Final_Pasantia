from django.db import models

class Person(models.Model):
    '''component = (
        ('keyboard','teclado'),
        ('mouse','raton'),
        ('display','monitor'),
        ('speaker','altavoz'),
        ('motherboard','placa base'),
        ('processor','procesador'),
    )'''
    cui = models.BigIntegerField(); ''',choices=component''' 
    names = models.CharField(max_length=30)
    last_names = models.CharField(max_length=30)
    address = models.CharField(max_length=100)
    age = models.IntegerField()
    birthday = models.DateField()

    class Meta:
        abstract = True

    def __str__(self):
        return f'CUI: {self.cui}'


class Professional(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=150)
    status = models.BooleanField(default=True)

    def __str__(self):
            return f'{self.name}'


class Client(Person):
    carrera = models.CharField(max_length=50)
    fono = models.CharField(max_length=100)
    prevision = models.CharField(max_length=100)
    input_date = models.DateField()
    status = models.BooleanField(default=True)

    def __str__(self):
        return f'Carrera: {self.carrera}'


class Employee(Person):
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=20)
    professional = models.ForeignKey(Professional,on_delete=models.CASCADE)
    input_date = models.DateField()
    status = models.BooleanField(default=True)

    def __str__(self):
        return f'Professional: {self.professional}'


