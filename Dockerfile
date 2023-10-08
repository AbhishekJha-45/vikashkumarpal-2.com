# Use an official Node.js runtime as the base image
FROM node:16.20.2


# Set the working directory inside the container
WORKDIR .

# Copy package.json and yarn.lock to the working directory
COPY package*.json package-lock.json ./

# Install app dependencies using Yarn
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build your Next.js app
RUN npm build --production

# Expose the port your app will run on
EXPOSE 3000

# Start your Next.js app
CMD ["npm", "start"]
