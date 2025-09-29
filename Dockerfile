FROM node:20-alpine AS builder

WORKDIR /app

COPY frontend/package.json frontend/yarn.lock ./

RUN yarn install --frozen-lockfile

COPY frontend ./

RUN yarn build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]