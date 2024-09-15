# Use an official Node.js runtime as a base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies using npm
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which the app runs
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
