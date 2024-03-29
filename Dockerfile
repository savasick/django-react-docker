FROM python:3.12-alpine

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev netcat-openbsd

RUN pip install --upgrade pip

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./app/backend /app/backend

WORKDIR /app/backend

COPY ./entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]