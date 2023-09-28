# Use the official Node.js image as the base image for building the React app
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port for serving the app (usually port 3000 during development)
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
