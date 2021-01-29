from django.contrib import admin
from apps.core.models import Lead


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    ...
