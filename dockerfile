FROM node:12.18.2-alpine

WORKDIR /usr/src/app

RUN apk add git

EXPOSE 3000