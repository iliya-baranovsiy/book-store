# ---------- Stage 1: Build React ----------
FROM node:22-alpine AS build

WORKDIR /app

COPY frontEnd/package*.json ./
RUN npm ci

COPY frontEnd/ .
RUN npm run build


# ---------- Stage 2: Nginx ----------
FROM nginx:1.27-alpine

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html