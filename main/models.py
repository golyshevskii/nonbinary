from django.db import models


class Haircut(models.Model):
    title = models.CharField(max_length=100, verbose_name='Title')
    img = models.ImageField(verbose_name='Image', upload_to='images/haircuts/', blank=True, null=True)

    def __str__(self):
        return self.title


class Coloring(models.Model):
    title = models.CharField(max_length=100, verbose_name='Title')
    img = models.ImageField(verbose_name='Image', upload_to='images/coloring/', blank=True, null=True)

    def __str__(self):
        return self.title


class Booking(models.Model):
    name = models.CharField(max_length=100, verbose_name='Name')
    phone_number = models.CharField(max_length=50, verbose_name='Telephone')
    booking_date = models.DateTimeField(verbose_name='Booking Date')
    create_date = models.DateTimeField(verbose_name='Created Date', auto_now_add=True)

    def __str__(self):
        return self.name