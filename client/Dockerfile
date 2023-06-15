# starting from node base image
FROM node:16-alpine

# chaging the working directory
WORKDIR /app

# copying package & yarn files and installing dependecies
COPY package*.json .
RUN npm install

# copying rest of the files
COPY . .

# starting the server
CMD ["npm", "start"]