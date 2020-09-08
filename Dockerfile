FROM buildkite/puppeteer:latest
ENV  PATH="${PATH}:/node_modules/.bin"
ENV  PORT="8080"

WORKDIR /mon
COPY package.json package-lock.json ./
RUN npm i
COPY app.js browser.js ./
COPY bin ./bin
COPY routes ./routes
ENTRYPOINT ["npm", "start"]
