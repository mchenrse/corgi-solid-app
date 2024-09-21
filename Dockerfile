FROM node:22-alpine

RUN apk add --no-cache bash

RUN apk add --no-cache git

WORKDIR /home

COPY . .

# RUN npm install --verbose

# COPY /src /src

