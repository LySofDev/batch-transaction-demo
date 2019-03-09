FROM ruby:2.6.0-alpine3.8

RUN apk update && \
    apk add nano build-base postgresql-dev && \
    gem install bundler rails

RUN apk add git
RUN git config --global user.email "hernandez.dev.services@gmail.com"
RUN git config --global user.name "Esteban Hernandez"

RUN mkdir /app
WORKDIR /app
COPY . .
RUN bundle