import React, { useState } from "react";
import axios from "axios";
import Logo from "../assets/logo_leubeach.webp";
import { useNavigate } from "react-router-dom";
import {getCsrfToken} from '../utils/getCsrfToken';

//decode le token voir le file
getCsrfToken()

const Connexion: React.FC = () => {
  const navigate = useNavigate(); // Créez une instance de useNavigate

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // S'assurer que les cookies, y compris le cookie CSRF, sont envoyés avec la requête
      axios.defaults.withCredentials = true;

      // Récupérer le cookie CSRF avant d'envoyer la requête de connexion
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");

      // Extrait le token CSRF du cookie pour l'utiliser dans la requête de connexion
      const csrfToken = getCsrfToken();

      const response = await axios.post(
        "http://localhost:8000/api/login",
        { email, password },
        {
          headers: {
            Accept: "application/json",
            "X-XSRF-TOKEN": csrfToken, // Fournir le token CSRF extrait dans les en-têtes de la requête
          },
        }
      );

      console.log("Réponse de connexion:", response.data);
      localStorage.setItem("token", response.data.token);
      setErrorMessage(null);
      navigate('/accueil')
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setErrorMessage("Erreur lors de la connexion : " + error.response.data.message);
      } else {
        setErrorMessage("Erreur lors de la connexion.");
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="container-connexion">
          <div className="container-element-connexion">
            <div className="container-title">
              <h1 className="title-connexion">Connexion</h1>
            </div>

            <div className="container-form-connexion">
              <form onSubmit={handleSubmit}>
                <div className="container-input">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="container-input">
                  <label>Mot de passe</label>
                  <input
                    type="password"
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}

                <div className="container-connexion-btn">
                  <button type="submit">Connexion</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connexion;
