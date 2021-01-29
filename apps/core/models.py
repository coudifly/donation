import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser
from model_utils.models import TimeStampedModel
from djmoney.models.fields import MoneyField
from phonenumber_field.modelfields import PhoneNumberField


class Base(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    class Meta:
        abstract = True


class User(AbstractUser, Base):
    pass


class Lead(Base):
    ip = models.GenericIPAddressField(verbose_name='IP')
    name = models.CharField(max_length=255, blank=True, verbose_name='Nome')
    email = models.CharField(max_length=255, blank=True, verbose_name='Email')
    amount = MoneyField(max_digits=14, decimal_places=4, blank=True, default_currency='BRL', verbose_name='Valor a ser doado')
    phone = PhoneNumberField(blank=True, verbose_name='Telefone')

    class Meta:
        verbose_name = 'Lead'
        verbose_name_plural = 'Leads'
