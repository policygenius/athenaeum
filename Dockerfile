FROM node:8.9.3

RUN apt-get update
RUN apt-get install -y python-dev
RUN curl -O https://bootstrap.pypa.io/get-pip.py
RUN python get-pip.py
RUN pip install gsutil

COPY package.json /app/
COPY yarn.lock /app/

WORKDIR /app

RUN yarn --frozen-lockfile

COPY . /app/

ENV NODE_ENV production

EXPOSE 6060
