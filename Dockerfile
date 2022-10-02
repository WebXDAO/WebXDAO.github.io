FROM node:16.17.0-alpine
WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .

CMD ["npm","run","dev"]



# if facing error while building image, paste there two command in terminal.

# export DOCKER_BUILDKIT=0
#export COMPOSE_DOCKER_CLI_BUILD=0
