FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies separately to leverage Docker layer caching
COPY package.json package-lock.json ./
ENV npm_config_legacy_peer_deps=true
RUN npm ci

# Copy source and build the production bundle
COPY . .
RUN npm run build


FROM nginx:alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
