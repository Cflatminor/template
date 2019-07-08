FROM node:10

# Создать директорию app
WORKDIR /home/roman/Documents/lala/pmmm

# Установить зависимости приложения
# Используется символ подстановки для копирования как package.json, так и package-lock.json,
# работает с npm@5+
COPY package*.json ./

RUN npm install
# Используется при сборке кода в продакшене
#RUN npm install --only=production

# Скопировать исходники приложения
#COPY src ./pm
COPY ./ /home/roman/Documents/lala/pmmm

#EXPOSE 3000
CMD [ "node", "server.js" ]
