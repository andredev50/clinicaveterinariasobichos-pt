FROM node:20-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

FROM node:20-alpine AS production-dependencies-env
COPY ./package.json /app/
WORKDIR /app
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

FROM node:20-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:20-alpine
COPY ./package.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
# No HEALTHCHECK: Dokploy/Traefik in Swarm mode only routes traffic to
# tasks Swarm considers "ready", and an in-Dockerfile HEALTHCHECK can
# block ready-ness if it ever returns non-zero (busybox wget against
# react-router-serve's SSR streaming was the trigger). Dokploy's per-app
# healthCheckSwarm config can replace this if liveness probes are
# wanted later.
CMD ["npm", "run", "start"]