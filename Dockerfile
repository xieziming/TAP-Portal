FROM node:6.9.5

COPY . /var/www

EXPOSE 4200

WORKDIR /var/www
