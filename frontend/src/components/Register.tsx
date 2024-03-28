import React, { useState } from "react";
import axios from "axios";
import Logo from "../assets/logo_leubeach.webp";

// Extrait le token CSRF du cookie et le retourne
function getCsrfToken() {
  const csrfToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("XSRF-TOKEN="))
    ?.split("=")[1];
  return csrfToken ? decodeURIComponent(csrfToken) : null;
}

function Register() {
  
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      first_name: firstName,
      familly_name: familyName,
      email: email,
      password: password,
      dob: dob,
    };

    console.log("Tentative d'envoi de données d'utilisateur:", userData);

    try {
      // Configurer Axios pour inclure les cookies dans chaque requête (nécessaire pour Sanctum)
      axios.defaults.withCredentials = true;

      console.log("Récupération du jeton CSRF avec Sanctum...");
      // Récupération du jeton CSRF
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");

      console.log(
        "Jeton CSRF récupéré avec succès. Envoi de la requête d'inscription..."
      );

      // Extrait le token CSRF du cookie
      const csrfToken = getCsrfToken();

      // Envoi de la requête d'inscription avec le token CSRF dans les en-têtes
      const response = await axios.post(
        "http://localhost:8000/api/register",
        userData,
        {
          headers: {
            "X-XSRF-TOKEN": csrfToken,
          },
        }
      );

      console.log("Réponse d'inscription reçue:", response);
      console.log("Résultat de l'inscription:", response.data);
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      // En cas d'erreur, Axios encapsule la réponse dans `error.response`
      if (error.response) {
        console.log("Réponse d'erreur:", error.response.data);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="container-register">
          <div className="container-element-register">
            <div className="container-title">
              <h1 className="title-register">Inscription</h1>
            </div>

            <div className="container-form-register">
              <form onSubmit={handleSubmit}>
                <div className="container-input">
                  <label>Nom</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    name="familly_name"
                    onChange={(e) => setFamilyName(e.target.value)}
                    required
                  />
                </div>

                <div className="container-input">
                  <label>Prénom</label>
                  <input
                    type="text"
                    placeholder="Votre prénom"
                    name="first_name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="container-input">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Votre email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="container-input">
                  <label>Mot de passe</label>
                  <input
                    type="password"
                    placeholder="Votre mot de passe"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="container-input">
                  <label>Date de naissance</label>
                  <input
                    type="date"
                    name="dob"
                    required
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>

                <div className="container-register-btn">
                  <button type="submit">S'inscrire</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
