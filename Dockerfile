FROM node:latest

WORKDIR /home/geotiff/geotiff-front

COPY package.json ./
RUN npm install
COPY . .

EXPOSE 8080

CMD ["npm","run","start-on-server"]

