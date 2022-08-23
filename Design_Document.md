# Titulo: Smile Dental Clinic

## Overview: 
Plataforma web para gestionar las citas de una clinica de odontologia de los diferentes clientes,asi como tambien se podra administrar a los especialistas y personal en general que estaran laborando en la clinica.

### Alcance(Scope)

- La aplicacion tendra acceso para un usuario administrador, para poder gestinar a los empleados y usuarios de la clinica.
- La aplicacion tendra acceso para usuarios empleados, para poder gestionar las diferentes operaciones segun su especialidad y actividad asignado.

#### Casos de uso

* El usuario administrador puede crear nuevos usuarios especialistas.
* El usuario administrador puede crear nuevos usuarios secretarias.
* El usuario administrador puede crear nuevos usuarios asistentes.
* El usuario secretaria puede crear citas .
* El usuario especialista puede crear diagnosticos medicos para un paciente .
* El usuario asistente puede crear operaciones segun con el especialista o secretaria asignado.



#### Out of Scope (casos de uso No Soportados)

* El usuario no puede acceder con cuentas de tercero(google,facebook etc.)
* El usuario no puede registrarse sin una contaseña valida.
* El usuario admministrador no puede crear citas.
* El usuario usuario empleado no puede crear a un especialista.

---
## Arquitectura

### Diagramas
Diagrama de clases
![img](./assets/DiagramaClases_SpotPlay.png)

Diagrama de secuencia

Diagrama de casos de uso

poner diagramas de secuencia, uml, etc

### Modelo de datos
Poner diseÃ±o de entidades, Jsons, tablas, diagramas entidad relaciÃ³n, etc..

---
## Limitaciones
Lista de limitaciones conocidas. Puede ser en formato de lista.
Ej.
* Llamadas del API tienen latencia X
* No se soporta mas de X llamadas por segundo
---
## Costo
DescripciÃ³n/AnÃ¡lisis de costos
Ejemplo:
"Considerando N usuarios diarios, M llamadas a X servicio/baseDatos/etc"
* 1000 llamadas diarias a serverless functions. $XX.XX
* 1000 read/write units diarias a X Database on-demand. $XX.XX
Total: $xx.xx (al mes/dia/aÃ±o)