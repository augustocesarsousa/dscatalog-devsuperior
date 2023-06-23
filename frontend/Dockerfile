FROM node:14 as builder
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
CMD ["yarn", "start"]