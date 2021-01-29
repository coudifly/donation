from django.contrib import admin
from django.urls import path
from apps.core import views


admin.site.site_header = 'Donation'
admin.site.site_title = 'Donation'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('embed', views.EmbedView.as_view(), name='embed')
]
