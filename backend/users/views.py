from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from rest_framework.views import APIView, View
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from .forms import UserRegisterForm, UpdateProfileForm
from .models import Tile
from .serializers import TileSerializer
from rest_framework.response import Response
import json

class Profile(APIView):
	permission_classes = (IsAuthenticated,)
	def get(self, request):
		if request.method == 'GET':
			user_profile = {'username': request.user.username, 'email': request.user.email, 'first_name': request.user.first_name, 'last_name': request.user.last_name}
			return (JsonResponse(user_profile, safe=False))
	def post(self, request):
		if request.method == 'POST':
			print("USER")
			print(request.user)
			print("BODY")
			print(request.body)
			body_unicode = request.body.decode('utf-8')
			body = json.loads(body_unicode)
			profile_upd_form = UpdateProfileForm(body, instance=request.user)
			if profile_upd_form.is_valid:
				profile_upd_form.save()
				return HttpResponse("Valid")
		return JsonResponse(profile_upd_form.errors.as_json(), safe=False)

class Register(View):
	def post(self, request):
		print(request.body)
		if request.method == 'POST':
			body_unicode = request.body.decode('utf-8')
			body = json.loads(body_unicode)
			listBody = dict()
			form = UserRegisterForm(body)
			print("FORM")
			if form.is_valid():
				form.save()
				username = form.cleaned_data.get('username')
				return HttpResponse("Valid")
		return JsonResponse(form.errors.as_json(), safe=False)


class Tiles(APIView):
	permission_classes = (IsAuthenticated,)
	def get(self, request):
		if request.method == 'GET':
			user_tiles=list()
			tiles = Tile.objects.filter(user__username=request.user.username).order_by('seq_nr')
			for tile in tiles:
				cat = tile.category.split(";")
				user_tiles.append({'tile_type': tile.tile_type, 'seq_nr': tile.seq_nr, 'category':cat})
			return (JsonResponse(user_tiles, safe=False))

	def post(self, request):
		if request.method == 'POST':
			serializer = TileSerializer(data=request.data)
			print(request.data)
			if serializer.is_valid():
				serializer.save(user = request.user)
				print(serializer.data)
				return HttpResponse("Valid")
			return HttpResponse(serializer.errors)

	def put(self, request):
		valid = list()
		if request.method == 'PUT':
				Tile.objects.filter(user__username=request.user.username).delete()
				tiles = request.data
				for tile in tiles:
					tile_type = tile['tile_type']
					seq_nr = tile['seq_nr']
					category = tile['category']
					tile_category = ""
					for cat in category:
						tile_category = tile_category+cat+";"
					tile_category = tile_category[:-1]	
					dict_data =  {'tile_type': tile_type, 'seq_nr': seq_nr, 'category': tile_category}
					serializer = TileSerializer(data=dict_data)
					if serializer.is_valid():
						serializer.save(user = request.user)
						valid.append(True)
					else:
						valid.append(False)
				for i in valid:
					if i==False:
						return HttpResponse("Not valid")
				return HttpResponse("Valid")
		return HttpResponse("Not valid")