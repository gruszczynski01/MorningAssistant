# MorningAssistant
### An app that'll make your morning easier :)

# Project initilization
0. Set environmental variables on your operating system:
    * MA_SECRET_KEY - key to the Django project
    * MA_WEATHER_API_KEY - key to openweathermap API
    * MA_NEWS_API_KEY - key to newsapi 
    * EMAIL_HOST_USER_VAR - email to send reset email
    * EMAIL_HOST_PASSWORD_VAR - email password
    * DEFAULT_FROM_EMAIL_VAR - default sender name

1. Create virtualenv using venv
``` 
python3 -m venv ma_venv
```
2. Activate virtualenv
``` 
source ma_venv/bin/activate
```
3. Upgrate pip (optional)
``` 
python3 -m pip install --upgrade pip
```
4. Install required packages
``` 
pip install -r requirements.txt
```
5. Make migrations and migrate
``` 
python manage.py makemigrations && python manage.py migrate
```
6. Run the server
``` 
python manage.py runserver
```
