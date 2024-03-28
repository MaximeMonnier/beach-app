import React, { useState } from "react";
import axios from "axios";
import Logo from "../assets/logo_leubeach.webp";
import { useNavigate } from "react-router-dom";
import { getCsrfToken } from "../utils/getCsrfToken";

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [familyName, setFamilyName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [dob, setDob] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const userData = {
      first_name: firstName,
      familly_name: familyName,
      email: email,
      password: password,
      dob: dob,
    };

    try {
      axios.defaults.withCredentials = true;
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");
      const csrfToken = getCsrfToken();

      const response = await axios.post(
        "http://localhost:8000/api/register",
        userData,
        {
          headers: {
            "X-XSRF-TOKEN": csrfToken,
          },
        }
      );

      console.log( "le token est la =>" + response.data.token);
      
      localStorage.setItem("token", response.data.token);
      console.log("Token stocké dans localStorage");
      

      console.log("Réponse d'inscription reçue:", response);
      console.log("Résultat de l'inscription:", response.data);
      navigate('accueil');
      
      setIsSubmitting(false);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Supposons que l'API renvoie des erreurs dans error.response.data.errors
        setErrors(
          error.response.data.errors || {
            form: "Une erreur inconnue est survenue.",
          }
        );
      } else {
        setErrors({ form: "Problème de connexion ou erreur serveur." });
      }
      setIsSubmitting(false); // Réactive le bouton en cas d'erreur
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

            {errors.form && <div className="error-message">{errors.form}</div>}

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
                  {errors.familly_name && (
                    <div className="error-message">{errors.familly_name}</div>
                  )}
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
                  {errors.first_name && (
                    <div className="error-message">{errors.first_name}</div>
                  )}
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
                  {errors.email && (
                    <div className="error-message">{errors.email}</div>
                  )}
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
                  {errors.password && (
                    <div className="error-message">{errors.password}</div>
                  )}
                </div>

                <div className="container-input">
                  <label>Date de naissance</label>
                  <input
                    type="date"
                    name="dob"
                    required
                    onChange={(e) => setDob(e.target.value)}
                  />
                  {errors.dob && (
                    <div className="error-message">{errors.dob}</div>
                  )}
                </div>

                <div className="container-register-btn">
                  <button type="submit" disabled={isSubmitting}>
                    S'inscrire
                  </button>
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
