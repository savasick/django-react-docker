# Django, React with docker-compose

Repo include `django` , `gunicorn` , `postgresql` , `nginx`, `react.js`



## Usage

### Run locally

<li>need python and npm</li>

install
```bash
cd app/frontend
npm install pm2 -g
cd ../..
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
```
###### comment all DB variables at .env file or change to local database

start
```bash
nohup python3 app/backend/manage.py runserver 0.0.0.0:80 &
cd app/frontend
pm2 --name frontend start npm -- start
cd ../..
python3 manage.py makemigrations --no-input
python3 app/backend/manage.py migrate --no-input

python3 app/backend/manage.py collectstatic --no-input

DJANGO_SUPERUSER_PASSWORD='admin'; python3 app/backend/manage.py createsuperuser --username 'admin' --email 'admin@email.com' --noinput
```


stop
```bash
pm2 delete 0
pkill -f "manage.py runserver 0.0.0.0:80"
```

#

### By docker

<li>need docker and docker-compose</li>

Run app:
```bash
docker-compose up -d --build
```

Run dev:
```bash
docker-compose -f docker-compose.dev.yml up -d --build
```

Logs app:
```bash
docker-compose logs -f
```

Down app:
```bash
docker-compose down
```


# Endpoints

Reachable at:\
<a href="http://localhost">localhost</a> ,
<a href="http://localhost:8000">localhost:8000</a>\
<a href="http://127.0.0.1">127.0.0.1</a> , 
<a href="http://127.0.0.1:8000">127.0.0.1:8000</a>

react:\
<a href="http://localhost:3000">localhost:3000</a>\
<a href="http://127.0.0.1:3000">127.0.0.1:3000</a>

Admin at:\
<a href="http://localhost/admin">localhost/admin</a> ,
<a href="http://127.0.0.1/admin">127.0.0.1/admin</a>

###### login / password for admin page: <strong> admin </strong>