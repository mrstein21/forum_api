FROM node:alpine


RUN mkdir /app
ADD . /app
WORKDIR /app

RUN npm update
CMD npm start