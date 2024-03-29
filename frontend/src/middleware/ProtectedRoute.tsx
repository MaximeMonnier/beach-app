import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // Simple vérification d'authentification

  if (!isAuthenticated) {
    // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
    return <Navigate to="/connexion" />;
  }

  return <>{children}</>; // Si authentifié, affichez le composant enfant
};

export default ProtectedRoute;
