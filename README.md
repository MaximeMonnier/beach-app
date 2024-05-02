# Sports Field Management Application

![alt text](<maquette/Capture d’écran (35).png>)

### An application that allows managing sports fields based on the sport practiced, highlighting individuals and associations, and giving everyone the opportunity to participate in each offered sport

## How to install 🛠️

[Using Docker Desktop](https://www.docker.com/products/docker-desktop/)

- Clone the repositories.
- Configure the '.env' file.
- Check the docker-compose [See the file for details](https://github.com/MaximeMonnier/docker-react-laravel-dev/blob/main/docker-compose.yml).

### Frontend 📱

[vite.js](https://vitejs.dev/)

- Install the frontend part with 'npm install'.
- Test the server with 'npm run dev'.
- Configure the 'vite.config.ts' [file. See the file for details](https://github.com/MaximeMonnier/docker-react-laravel-dev/blob/main/frontend/vite.config.ts) .
- Create the Dockerfile and configure it. [See the file for details](https://github.com/MaximeMonnier/docker-react-laravel-dev/blob/main/frontend/Dockerfile).

### Backend 🗄️

[Laravel](https://laravel.com/)

- Install the backend part with 'composer install'.
- Test the server with 'php artisan serve'.
- Configure the environment variables to connect to your database.
- Create the Dockerfile and configure it. [See the file for details](https://github.com/MaximeMonnier/docker-react-laravel-dev/blob/main/backend/Dockerfile).

### Docker 🐋

- Execute the docker-compose file, build the container with its images using 'docker-compose build'.
- Execute the docker-compose file with 'docker-compose up' or 'docker-compose up -d'.
- Follow the different links to connect to the different services such as 'phpMyAdmin'.

### other 🚀

To execute Laravel commands inside the container, find the container of your application using 'docker ps', then use 'docker exec -it container_name your_laravel_command'.
