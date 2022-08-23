
from rest_framework.routers import DefaultRouter
from django.db import router
from django.urls import path

from .viewsets.person import ClientViewSet,EmployeeViewSet,ProfessionalViewSet
from .viewsets.appointment import AppointmentViewSet,AbsenceViewSet,BackwardnessViewSet
from .viewsets.diagnostic import DiagnosticViewSet,Diagnostic_DetailViewSet,Medical_TreatmentViewSet
from .viewsets.medical_record import Medical_RecordViewSet

from .viewsets.diagnostic import OperacionesDiagnosticoView
from .viewsets.person import ValidPersonView,ValidProfessionalView,ValidEmployeeView,LoginView
from . viewsets.appointment import ValidAppointmentView

router = DefaultRouter()

router.register(r'client',ClientViewSet)
router.register(r'employee',EmployeeViewSet)
router.register(r'professional',ProfessionalViewSet)
router.register(r'appointment',AppointmentViewSet)
router.register(r'absence',AbsenceViewSet)
router.register(r'backwardness',BackwardnessViewSet)
router.register(r'diagnostic',DiagnosticViewSet)
router.register(r'diagnosticdetail',Diagnostic_DetailViewSet)
router.register(r'medicaltreatment',Medical_TreatmentViewSet)
router.register(r'medicalrecord',Medical_RecordViewSet)



urlpatterns = router.urls

urlpatterns += [
    path('peopleserved/',OperacionesDiagnosticoView.as_view()),
    path('validclient/',ValidPersonView.as_view()),
    path('validprofess/',ValidProfessionalView.as_view()),
    path('validuser/',ValidEmployeeView.as_view()),
    path('validappointment/',ValidAppointmentView.as_view()),
    path('login/',LoginView.as_view())
]
