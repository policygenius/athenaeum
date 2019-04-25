FROM node:8.15.1

COPY package.json /app/
COPY yarn.lock /app/

WORKDIR /app

RUN yarn --frozen-lockfile

COPY . /app/

ENV NODE_ENV production
