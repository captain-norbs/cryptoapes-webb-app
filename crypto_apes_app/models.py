from django.db import models

class Cryptoape(models.Model):
    id = models.IntegerField(null=False, primary_key=True)
    Type = models.CharField(max_length=200, null=False)
    Eyes = models.CharField(max_length=200, null=False)
    Mouth = models.CharField(max_length=200, null=False)
    Shirt = models.CharField(max_length=200, null=True, blank=True)
    Head = models.CharField(max_length=200, null=True, blank=True)
    Beard = models.CharField(max_length=200, null=True, blank=True)
    Ears = models.CharField(max_length=200, null=True, blank=True)
    Nose = models.CharField(max_length=200, null=True, blank=True)
    Glasses = models.CharField(max_length=200, null=True, blank=True)
    Chain = models.CharField(max_length=200, null=True, blank=True)
    Attributes = models.IntegerField(null=False)
    Rarity = models.CharField(max_length=200, null=False)
    Brains = models.CharField(max_length=200, null=True, blank=True)
    Strength = models.CharField(max_length=200, null=True, blank=True)
    Speed = models.CharField(max_length=200, null=True, blank=True)
    Bananas = models.CharField(max_length=200, null=True, blank=True)
    Rarity_multiplier = models.IntegerField(null=False)
    ETH_base_price = models.FloatField(null=False)
    ETH_base_price_with_multiplier = models.FloatField(null=False)
    File = models.CharField(max_length=200, null=False)

    def __str__(self):
        return "Cryptoape #" + str(self.id)
