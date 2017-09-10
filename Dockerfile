FROM node:6.9.5

RUN git clone https://github.com/xieziming/tap-portal.git /var/www \
    && cd /var/www \
    && npm install --global rimraf \
    && npm run clean \
    && npm install --global webpack webpack-dev-server typescript@2.3.2 \
    && npm install \
    && npm run build:prod:aot

EXPOSE 8080

WORKDIR /var/www
ENTRYPOINT ["npm", "run", "start:prod"]
