FROM node:16.13.0-alpine as build

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install --silent

COPY . .

  # Inicializa a aplicação
CMD ["npm","run","start"] 