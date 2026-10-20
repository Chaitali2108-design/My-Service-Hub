from django.contrib import admin
from .models import UserAccount


@admin.register(UserAccount)
class UserAccountAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'full_name',
        'email',
        'phone',
        'role',
        'city',
        'created_at',
    )

    list_filter = ('role', 'city')
    search_fields = ('full_name', 'email', 'phone')