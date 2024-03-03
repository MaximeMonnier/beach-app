import React from "react";

function Register() {
  return (
    <>
      <div className="container-register">
        <div className="container-element-register">
          <div className="container-title">
            <h1 className="title-register">Inscription</h1>
          </div>

          <div className="container-form-register">
            <form action="">
              <div className="container-input">
                <label>Nom</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  name="nom"
                  required
                />
              </div>

              <div className="container-input">
                <label>Prénom</label>
                <input
                  type="text"
                  placeholder="Votre prénom"
                  name="prenom"
                  required
                />
              </div>

              <div className="container-input">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Votre email"
                  name="email"
                  required
                />
              </div>

              <div className="container-input">
                <label>Mot de passe</label>
                <input
                  type="password"
                  placeholder="Votre mot de passe"
                  name="password"
                  required
                />
              </div>

              <div className="container-input">
                <label>Date de naissance</label>
                <input type="date" name="dateNaissance" required />
              </div>

              <div className="container-input">
                <label>Genre</label>
                <select className="value-register" name="genre" required>
                  <option value="">Sélectionner...</option>
                  <option value="femme">Femme</option>
                  <option value="homme">Homme</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="container-condition-register">
                <input
                  type="checkbox"
                  id="conditions"
                  name="conditions"
                  required
                />
                <label htmlFor="conditions">
                  J'accepte les conditions d'utilisation
                </label>
                {/* Intégration CAPTCHA ici */}
              </div>

              <div className="container-register-btn">
                <button type="submit">S'inscrire</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
