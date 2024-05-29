FROM node:16-alpine AS deps
WORKDIR /app
COPY package.json ./
RUN yarn install

FROM deps AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN yarn build 


FROM nginx:alpine3.19

RUN mkdir /app
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /app/ref-ui

EXPOSE 8088

CMD [ "nginx", "-g", "daemon off;" ]
