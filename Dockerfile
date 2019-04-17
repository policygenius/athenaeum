FROM node:8.11.3

RUN sed -i '/jessie-updates/d' /etc/apt/sources.list

ENV SONAR_SCANNER_CLI_VERSION=3.2.0.1227 \
    SONAR_SCANNER_HOME=/opt/sonar-scanner

RUN apt-get update \
  && apt-get -y install \
     unzip \
  && rm -rf /var/lib/apt/lists/*

COPY package.json /app/
COPY yarn.lock /app/

WORKDIR /app

RUN yarn --frozen-lockfile

COPY . /app/

RUN cd /opt \
  && curl -o sonar-scanner.zip -fSL https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-$SONAR_SCANNER_CLI_VERSION-linux.zip \
  && unzip sonar-scanner.zip \
  && mv sonar-scanner-$SONAR_SCANNER_CLI_VERSION-linux sonar-scanner \
  && rm sonar-scanner.zip*

ENV PATH /opt/sonar-scanner/bin/:$PATH

ENV NODE_ENV production

EXPOSE 6060
