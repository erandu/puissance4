FROM node:9


WORKDIR /usr/app



COPY . .
RUN cd back && npm run build
 

WORKDIR /usr/app/back

CMD ["node", "lib/app.js"]


