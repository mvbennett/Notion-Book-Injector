FROM node:18-alpine

WORKDIR /api

ENV MESSAGE=nothingyet

COPY package.json .

RUN yarn

COPY . .

EXPOSE 4000

USER node

CMD [ "yarn", "start" ]
