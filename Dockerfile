FROM node:10.17

WORKDIR /srv

ADD package.json ./
ADD package-lock.json ./
RUN npm ci

ADD . .

EXPOSE 80
CMD ["npm", "run", "start"]
