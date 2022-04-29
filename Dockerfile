# build environment
FROM node:17.3.1-alpine as build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
# production environment

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 443 80
CMD ["nginx", "-g", "daemon off;"]
