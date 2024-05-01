# Base image
FROM node:20-alpine

# Install PostgreSQL client
RUN apk add --no-cache postgresql-client

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

ENV DATABASE_URL "postgresql://admin:root@dbpostgres:5432/blogdb"

# Install Prisma CLI for running migrations
RUN npm install prisma --save-dev

# Copy entrypoint script
COPY entrypoint.sh /usr/src/app/entrypoint.sh

# Make entrypoint script executable
RUN chmod +x /usr/src/app/entrypoint.sh

# Set entrypoint script to run on container start
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]

# Command to start the Node.js application
CMD ["npm", "run", "start:dev"]
