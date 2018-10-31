FROM node:alpine AS build-phase
WORKDIR /app
COPY ./ ./
RUN yarn install
RUN yarn build

FROM nginx:alpine AS run-phase
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-phase /app/build /usr/share/nginx/html
