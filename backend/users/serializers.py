from rest_framework.serializers import ModelSerializer
from .models import Tile
from rest_framework import serializers


class TileSerializer(ModelSerializer):

    class Meta:
        model = Tile
        fields = ('tile_type', 'seq_nr', 'category')
        