
from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse


def home(request):
    return JsonResponse({
        "message": "Welcome to LocalServe API!",
        "status": "success"
    })


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', home),
    path('api/accounts/', include('accounts.urls')),
]
