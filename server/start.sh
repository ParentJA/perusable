#!/bin/bash

python ./perusable/manage.py migrate
python ./perusable/manage.py collectstatic --clear --noinput
gunicorn --bind 0.0.0.0:8000 --chdir ./perusable perusable.wsgi --reload --workers 3