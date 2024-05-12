FROM node:22

# WORKDIR /opt/app-root-src
WORKDIR /home/node/app

COPY package.json .
COPY package-lock.json .

RUN npm install

ENTRYPOINT [ "npm", "start"]
