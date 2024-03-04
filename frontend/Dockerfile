# Utiliser une image Node.js basée sur Alpine pour sa légèreté
FROM node:16-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de configuration de l'application (package.json et package-lock.json) dans le répertoire de travail
COPY package*.json ./

RUN npm config set unsafe-perm true

# Installer les dépendances du projet
RUN npm install

# Changer les permissions du dossier node_modules pour permettre l'écriture par n'importe quel utilisateur
RUN chmod -R 777 /app/

# Copier les autres fichiers et dossiers du projet dans le répertoire de travail du conteneur
COPY . .

# Exposer le port sur lequel Vite tourne par défaut (3000)
EXPOSE 5173

# Démarrer le serveur de développement Vite
CMD ["npm", "run", "dev"]
