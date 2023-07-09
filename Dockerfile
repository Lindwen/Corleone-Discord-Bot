FROM node:18.16.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn set version berry
RUN yarn install

COPY . .

CMD [ "yarn", "start" ]