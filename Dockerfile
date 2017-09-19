FROM node:boron
WORKDIR /usr/src/app

COPY package.json .

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

RUN npm run build
CMD ["npm", "run", "start"]