FROM node:14

WORKDIR /app

COPY ./app /app
RUN npm install

CMD ["node", "/app/index.js"]
