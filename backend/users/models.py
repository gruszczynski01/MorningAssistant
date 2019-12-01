from django.contrib.auth.models import User
from django.db import models

class Tile(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tile_type = models.CharField(default=' ', max_length=50)
    seq_nr = models.IntegerField()
    category = models.TextField()