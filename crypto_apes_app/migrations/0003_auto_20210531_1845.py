# Generated by Django 3.2.3 on 2021-05-31 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crypto_apes_app', '0002_auto_20210531_1842'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cryptoape',
            name='Bananas',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cryptoape',
            name='Beard',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cryptoape',
            name='Brains',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cryptoape',
            name='Chain',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cryptoape',
            name='Ears',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cryptoape',
            name='Glasses',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cryptoape',
            name='Head',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cryptoape',
            name='Nose',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cryptoape',
            name='Shirt',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cryptoape',
            name='Speed',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cryptoape',
            name='Strength',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]