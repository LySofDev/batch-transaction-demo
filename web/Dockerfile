FROM node:8.12.0-alpine

RUN apk update && apk upgrade

RUN apk add git
RUN git config --global user.email "hernandez.dev.services@gmail.com"
RUN git config --global user.name "Esteban Hernandez"

RUN npm install -g npm
RUN npm i -g @angular/cli

RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm i