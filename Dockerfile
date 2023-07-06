FROM node:16-alpine AS base
RUN adduser app -D -h /app
WORKDIR /app
USER app

FROM base as builder
COPY --chown=app package.json yarn.lock ./
RUN yarn install --non-interactive --production=false
COPY --chown=app . .
RUN yarn build && \
    rm -rf node_modules && \
    NODE_ENV=production yarn install \
        --non-interactive \
        --production=true

FROM base
COPY --from=builder /app .
EXPOSE 3000
CMD ["yarn", "start", "-H", "0.0.0.0", "-p", "3000"]
