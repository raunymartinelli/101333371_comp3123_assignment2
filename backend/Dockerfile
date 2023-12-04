# Stage 1: Build
FROM node:16 as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .


# Stage 2: Runtime
EXPOSE 3004
CMD ["node", "src/server.js"]
