import React, { useState } from "react";
import { Link } from "react-router-dom";
import FullCalendarNormal from "../components/calendar/FullCalendarNormal";
import FullCalendarYear from "../components/calendar/FullCalendarYear";

const FullCalendarPage: React.FC = () => {
  const [calendarView, setCalendarView] = useState("normal");

  return (
    <div className="bg-grey-800 w-full h-screen bg-bg-5 dark:bg-bg-3">
      <div className="w-full p-4">
        <Link to="/terrain">
          <button className="btn btn-sm btn-outline text-color-3 hover:bg-bg-3 hover:text-color-1">
            Retour
          </button>
        </Link>
      </div>
      <div className="w-full h-5/6 flex">
        <div className="w-1/3 m-auto mx-4 bg-bg-6 rounded-xl h-full">
          <ul className="menu flex-grow w-full rounded-box gap-4">
            <li className="bg-bg-1 rounded-lg text-color-3">
              <p className="cursor-pointer">Reserver</p>
            </li>
            <li className="bg-bg-1 rounded-lg text-color-3">
              <p
                className="cursor-pointer"
                onClick={() => setCalendarView("normal")}
              >
                Normal
              </p>
            </li>
            <li className="bg-bg-1 rounded-lg text-color-3">
              <p
                className="cursor-pointer"
                onClick={() => setCalendarView("year")}
              >
                Année
              </p>
            </li>
            <li className="bg-bg-1 rounded-lg text-color-3">
              <p
                className="cursor-pointer"
                onClick={() => setCalendarView("timeline")}
              >
                Info générale
              </p>
            </li>
          </ul>
          <div className="m-2 rounded-xl flex-grow bg-bg-1 text-color-3">
            <div className="pl-2 pt-2">
              <h1>Réserver un terrain</h1>
            </div>
            <form>

            </form>
          </div>
        </div>
        <div className="w-full h-full mr-4">
          {calendarView === "normal" && <FullCalendarNormal />}
          {calendarView === "year" && <FullCalendarYear />}
          {/* Ajoutez ici le composant pour la vue Timeline si nécessaire */}
        </div>
      </div>
    </div>
  );
};

export default FullCalendarPage;
