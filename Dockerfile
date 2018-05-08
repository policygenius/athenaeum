FROM node:8.9.3

COPY package.json /app/
COPY yarn.lock /app/

WORKDIR /app

RUN yarn --frozen-lockfile

COPY . /app/

ENV NODE_ENV production

EXPOSE 6060
