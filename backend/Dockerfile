FROM webdevops/php-nginx:8.3-alpine

# Installation des dépendances nécessaires, y compris mysql-client
RUN apk add --no-cache oniguruma-dev libxml2-dev nodejs npm mysql-client

# Installation de PHP extensions
RUN docker-php-ext-install bcmath ctype fileinfo mbstring pdo_mysql xml

# Installation de Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Définir le répertoire racine du document Web pour Nginx
ENV WEB_DOCUMENT_ROOT /app/public

# Définir le répertoire de travail
WORKDIR /app

# Copier le code source de l'application dans le répertoire de travail
COPY . .

# Installer les dépendances Composer
# En mode développement, vous pouvez vouloir inclure les dépendances de développement
RUN composer install --no-interaction

# Copier .env.example vers .env si .env n'existe pas
RUN if [ ! -f .env ]; then cp .env.example .env; fi

# Installer les dépendances npm et compiler les assets (si nécessaire)
RUN npm install

# S'assurer que les fichiers sont possédés par l'utilisateur 'application'
RUN chown -R application:application .

# Exposer le port 80 pour accéder à Nginx
EXPOSE 80
