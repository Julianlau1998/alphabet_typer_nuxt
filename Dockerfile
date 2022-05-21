FROM node:16-alpine as build-stage

ENV TZ=UTC+0

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN yarn install --non-interactive --no-progress
RUN yarn build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080

CMD ["yarn", "start"]