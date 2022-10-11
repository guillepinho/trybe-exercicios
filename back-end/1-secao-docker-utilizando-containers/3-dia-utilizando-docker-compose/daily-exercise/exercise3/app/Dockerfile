FROM node:16-alpine

RUN npx create-react-app app

WORKDIR /app

COPY package.json .
COPY package-lock.json .

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]