FROM node:19-alpine

WORKDIR /app

COPY package.json /app

RUN npm install -g pnpm && pnpm install

COPY . /app

ENV PORT=5137

EXPOSE 5137

CMD ["pnpm", "start"]