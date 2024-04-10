import React, { useState, useEffect } from "react";
import Logo from "../assets/logo_leubeach.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface UserInfo {
  first_name: string;
  familly_name: string;
}

const Accueil: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const logout = async () => {
    localStorage.removeItem("token");

    await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    navigate("/connexion");
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="relative">
      <nav className="w-full flex justify-between items-center bg-bg-2 rounded-3xl shadow-lg px-4 py-2 dark:bg-bg-1">
        <div className="ml-4 my-1">
          <img className="w-16 rounded-full" src={Logo} alt="logo" />
        </div>
        {/* Bouton burger visible seulement en dessous de md */}
        <div className="text-color-3 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className="hidden items-center md:flex w-full md:w-auto bg-transparent">
          <ul className="flex flex-col items-center md:flex-row text-color-3 w-full">
            <li className="m-2 cursor-pointer">
              <Link to="/terrain">Terrain</Link>
            </li>
            <li className="m-2 cursor-pointer text-center w-24">
              <Link to="/leuactu">Leu Actu</Link>
            </li>
            <li className="m-2 cursor-pointer">
              <Link to="/association">Association</Link>
            </li>
            <li className="m-2 cursor-pointer">
              <Link to="/evenement">Evenement</Link>
            </li>
            <li className="m-2 cursor-pointer">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="m-2 cursor-pointer">
              <Link to="/meteo">Météo</Link>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row w-full">
            <ul className="flex flex-col md:flex-row text-color-3 w-full">
              <button
                className="m-2"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <i
                  className={
                    isDarkMode ? "fa-regular fa-moon" : "fa-solid fa-sun"
                  }
                ></i>
              </button>
              {userInfo ? (
                <div className="flex items-center">
                  <p>
                    {userInfo.first_name} {userInfo.familly_name}
                  </p>
                  <button className="m-2" onClick={logout}>
                    <i className="fa-solid fa-lock"></i>
                  </button>
                </div>
              ) : (
                <button className="m-2" onClick={logout}>
                  Déconnexion <i className="fa-solid fa-lock"></i>
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Menu déroulant pour les écrans md et plus petits */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute md:hidden w-full bg-bg-2 shadow-lg rounded-b-xl z-20`}
      >
        <ul className="flex flex-col text-color-3 w-full">
          <li className="m-2 cursor-pointer">
            <Link to="/terrain">Terrain</Link>
          </li>
          <li className="m-2 cursor-pointer">
            <Link to="/leuactu">Leu Actu</Link>
          </li>
          <li className="m-2 cursor-pointer">
            <Link to="/association">Association</Link>
          </li>
          <li className="m-2 cursor-pointer">
            <Link to="/evenement">Evenement</Link>
          </li>
          <li className="m-2 cursor-pointer">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="m-2 cursor-pointer">
            <Link to="/meteo">Météo</Link>
          </li>
        </ul>
        <div className="flex flex-col w-full">
          <ul className="flex flex-col md:flex-row text-color-3 w-full">
            <button className="m-2" onClick={() => setIsDarkMode(!isDarkMode)}>
              <i
                className={
                  isDarkMode ? "fa-regular fa-moon" : "fa-solid fa-sun"
                }
              ></i>
            </button>
            {userInfo ? (
              <div className="flex items-center">
                <p>
                  {userInfo.first_name} {userInfo.familly_name}
                </p>
                <button className="m-2" onClick={logout}>
                  <i className="fa-solid fa-lock"></i>
                </button>
              </div>
            ) : (
              <button className="m-2" onClick={logout}>
                Déconnexion <i className="fa-solid fa-lock"></i>
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
