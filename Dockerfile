FROM node:18.16.1-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn set version berry

RUN yarn install

CMD [ "yarn", "start" ]