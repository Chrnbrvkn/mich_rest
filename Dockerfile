# Этап 1: Сборка клиентской части React
FROM node:latest as build-stage
WORKDIR /app
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Этап 2: Сборка серверной части Node.js/Express
FROM node:latest
WORKDIR /server

# Копирование зависимостей сервера и их установка
COPY server/package*.json ./
RUN npm install

# Копирование остальных файлов сервера
COPY server/ ./

# Копирование собранной клиентской части в публичную директорию сервера
COPY --from=build-stage /app/dist /server/build

# Открытие порта, на котором работает сервер
EXPOSE 3000

# Команда для запуска сервера
CMD ["node", "server.js"]
