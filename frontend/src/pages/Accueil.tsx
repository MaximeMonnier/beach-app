import React from "react";
import NavBar from "../components/NavBar";
import CardRugby from "../components/Card/CardRugby";
import CardTennis from "../components/Card/CardTennis";
import CardVolley from "../components/Card/CardVolley";
import imgAccueil from "../assets/img_accueil.png";
import { Link } from "react-router-dom";

const Accueil: React.FC = () => {
  return (
    <div className="bg-bg-5 dark:bg-bg-3">
      <div className="h-screen p-2 flex flex-col">
        <div className="w-full">
          <NavBar />
        </div>

        <div className="w-full p-4 flex flex-col">
          <div className="w-auto flex justify-around items-center p-4">
            <div className="flex flex-col items-start">
              <h1 className="text-7xl font-sans font-bold">
                <span className="text-color-1 dark:text-color-2">
                  Réservez un terrain
                </span>{" "}
                <br />
                <span className="text-color-2 text-5xl dark:text-color-1">
                  Pour jouer &nbsp;
                  <i className="fa-solid fa-volleyball text-color-1 dark:text-color-2"></i>
                </span>
                <br />
                <span className="text-color-1 dark:text-color-2">
                  avec vos amies
                </span>{" "}
                &nbsp;
                <i className="fa-solid fa-people-group text-color-2 dark:text-color-1"></i>
              </h1>
              <button className="bg-bg-2 text-color-1 p-2 rounded-xl mt-4 hover:bg-bg-1 hover:text-color-3 dark:bg-bg-1 dark:text-color-3 dark:hover:bg-bg-2 dark:hover:text-color-1">
                <Link to="/terrain">
                  Voir les Terrains{" "}
                  <i className="fa-solid fa-archway text-color-1 dark:text-color-3"></i>
                </Link>
              </button>
            </div>
            <div>
              <img src={imgAccueil} alt="img accueil" />
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <p className="text-color-1 hover:p-1 hover:bg-bg-2 hover:rounded-xl hover:text-color-1 dark:hover:bg-bg-1 dark:hover:text-color-3">
              <a href="#section1">Voir plus</a>
            </p>
            <p>
              <i className="fa-solid fa-arrow-down text-color-1 dark:text-color-1"></i>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-12 h-2 bg-bg-1 dark:bg-bg-2"></div>

      <div
        id="section1"
        className="w-full mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <CardRugby />
        <CardTennis />
        <CardVolley />
      </div>
    </div>
  );
};

export default Accueil;
