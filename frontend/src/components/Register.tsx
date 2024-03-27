import React, { useState } from "react";
import Logo from "../assets/logo_leubeach.webp";

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

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const contentType = response.headers.get("content-type");
      if (
        !response.ok ||
        !contentType ||
        !contentType.includes("application/json")
      ) {
        throw new Error("Réponse non JSON ou erreur de requête");
      }

      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.error(error);
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
