#FROM node:10
#
## Создать директорию app
#WORKDIR /var/www/application/
#
## Установить зависимости приложения
## Используется символ подстановки для копирования как package.json, так и package-lock.json,
## работает с npm@5+
#COPY package*.json ./
#
##RUN npm install
## Используется при сборке кода в продакшене
##RUN npm install --only=production
#
## Скопировать исходники приложения
##COPY src ./pm
#COPY ./ /var/www/application/
#
##EXPOSE 3000
#CMD [ "node", "server.js" ]
