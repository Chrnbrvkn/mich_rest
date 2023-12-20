FROM node:17.9.1

# Создание директории приложения в контейнере
WORKDIR /usr/src/app

# Копирование файлов package.json и package-lock.json для сервера
COPY server/package*.json ./server/

# Переход в каталог сервера и установка зависимостей
WORKDIR /usr/src/app/server
RUN npm install

# Копирование остальной части серверного кода
COPY server/src ./src

# Возвращение в корень директории приложения
WORKDIR /usr/src/app

# Копирование собранных файлов клиента
COPY client/dist ./client/dist

# Определение порта, который будет прослушивать приложение
EXPOSE 3000

# Команда для запуска сервера Node.js
CMD ["node", "server/src/server.js"]
