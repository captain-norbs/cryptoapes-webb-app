# Generated by Django 3.2.3 on 2021-05-26 02:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cryptoape',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('Type', models.CharField(max_length=200)),
                ('Eyes', models.CharField(max_length=200)),
                ('Mouth', models.CharField(max_length=200)),
                ('Shirt', models.CharField(max_length=200)),
                ('Head', models.CharField(max_length=200)),
                ('Beard', models.CharField(max_length=200)),
                ('Ears', models.CharField(max_length=200)),
                ('Nose', models.CharField(max_length=200)),
                ('Glasses', models.CharField(max_length=200)),
                ('Chain', models.CharField(max_length=200)),
                ('Attributes', models.IntegerField()),
                ('Rarity', models.CharField(max_length=200)),
                ('Brains', models.CharField(max_length=200)),
                ('Strength', models.CharField(max_length=200)),
                ('Speed', models.CharField(max_length=200)),
                ('Bananas', models.CharField(max_length=200)),
                ('Rarity_multiplier', models.IntegerField()),
                ('ETH_base_price', models.FloatField()),
                ('ETH_base_price_with_multiplier', models.FloatField()),
                ('File', models.CharField(max_length=200)),
            ],
        ),
    ]
