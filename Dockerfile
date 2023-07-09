FROM node:18.16.1-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY .yarn ./.yarn
COPY .yarnrc.yml ./
COPY .yarnrc ./

RUN yarn install

COPY . .

CMD [ "yarn", "start" ]