import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173, // Spécifiez le port si différent de 3000
    // Vous pouvez également ajouter d'autres configurations de serveur ici selon vos besoins
  },
});
