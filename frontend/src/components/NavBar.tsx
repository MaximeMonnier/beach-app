import React from "react";
import Logo from "../assets/logo_leubeach.webp";

const Accueil: React.FC = () => {
  return (
      <nav className="w-full flex justify-between items-center bg-[#0b2a24] rounded-3xl shadow-lg">
        <div className="ml-4 my-1">
          <img className="w-16 rounded-full" src={Logo} alt="logo" />
        </div>
        <div>
          <ul className="flex text-[#f9e6c6]">
            <li className="m-2 ">Terrain</li>
            <li className="m-2">Association</li>
            <li className="m-2">Evenement</li>
            <li className="m-2">blog</li>
            <li className="m-2">Météo</li>
          </ul>
        </div>
        <div className="flex text-[#f9e6c6]">
          <p><i className="fa-solid fa-sun"></i></p>
          <p><i className="fa-regular fa-moon"></i></p>
          <p><i className="fa-solid fa-lock"></i></p>
          <p><i className="fa-solid fa-lock-open"></i></p>
          <p>Connexion</p>
        </div>
      </nav>
  );
};

export default Accueil;
