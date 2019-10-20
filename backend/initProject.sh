#!/bin/bash
python3 -m venv ma_venv
source ma_venv/bin/activate
python3 -m pip install --upgrade pip
pip install -r requirements.txt
python manage.py makemigrations && python manage.py migrate
python manage.py runserver
