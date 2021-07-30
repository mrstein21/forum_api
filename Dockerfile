FROM node:alpine

RUN mkdir /app
ADD . /app
WORKDIR /apps

RUN npm update
CMD npm run