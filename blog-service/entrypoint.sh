#!/bin/sh

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to be ready..."
while ! pg_isready -h dbpostgres -p 5432 -U admin; do
    sleep 1
done

echo "PostgreSQL is ready."

# Run Prisma migrations
echo "Running Prisma migrations..."
npx prisma migrate dev --name init

# Seed the database
echo "Seeding the database..."
npm run db:seed

# Start the Node.js application
echo "Starting Node.js application..."
exec npm run start:dev
