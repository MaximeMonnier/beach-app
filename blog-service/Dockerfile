# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

ENV DATABASE_URL "postgresql://admin:root@dbpostgres:5432/blogdb"


# Creates a "dist" folder with the production build
RUN npm run build

# RUN npx prisma generate
# RUN npx prisma migrate dev --name init
# RUN npm run db:seed

# Start the server using the production build
CMD [ "npm", "run", "start:dev" ]
