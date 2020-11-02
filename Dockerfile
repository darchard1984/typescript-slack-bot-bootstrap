FROM node:alpine

WORKDIR /code

EXPOSE 8080

RUN npm install -g typescript && npm install typeorm -g

COPY . .
