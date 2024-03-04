

function Connexion() {
  return (
    <>
      <div className="container-connexion">
        <div className="container-element-connexion">
          <div className="container-title">
            <h1 className="title-connexion">Connexion</h1>
          </div>

          <div className="container-form-connexion">
            <form action="">
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

              <div className="container-connexion-btn">
                <button type="submit">Connexion</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connexion;
