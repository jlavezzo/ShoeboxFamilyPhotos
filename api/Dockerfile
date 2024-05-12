FROM node:22

WORKDIR /opt/app-root-src

COPY package.json .
COPY package-lock.json .

RUN npm install

ENTRYPOINT [ "npm", "run", "dev"]
