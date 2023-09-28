# Use the official Node.js image as the base image
FROM node:14-alpine as build
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your Express.js server will run on
EXPOSE 5000

# Start your Express.js application
CMD ["node", "index.js"]
