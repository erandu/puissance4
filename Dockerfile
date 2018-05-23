FROM node:9


WORKDIR /usr/app
EXPOSE  8080


COPY . .
RUN cd back && npm install && npm run build
 

WORKDIR /usr/app/back

CMD ["node", "lib/app.js"]


