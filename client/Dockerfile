FROM node:22

# WORKDIR /opt/app-root-src
WORKDIR /home/node/app

COPY package.json .

RUN npm install

COPY ./public ./public

ENTRYPOINT [ "npm", "start"]
# ENTRYPOINT [ "/bin/bash"]
