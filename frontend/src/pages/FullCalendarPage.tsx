import React from "react";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import frLocale from "@fullcalendar/core/locales/fr";

const FullCalendarPage: React.FC = () => {
  // Exemple d'événements
  const events = [
    { title: "Événement 1", date: "2024-05-15" },
    { title: "Événement 2", date: "2024-05-16" },
    { title: "Événement 3", date: "2024-05-17" },
    { title: "Événement 4", date: "2024-05-18" }
  ];

  return (
    <div className="bg-grey-800 w-full h-screen dark:bg-bg-3">
      <div className="w-full">
        <Link to="/terrain">
          <button className="btn btn-sm btn-outline">Retour</button>
        </Link>
      </div>
      <div className="w-full h-5/6 flex">
        <div className="w-1/3 mx-4 border border-red-500 flex-grow">
          <div>
            coucou
          </div>
        </div>
        <div className="p-6 w-2/3 border border-red-500 flex-grow">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            locale={frLocale}
            locales={[frLocale]}
            events={events}
            weekends={true}
          />
        </div>
      </div>
    </div>
  );
};

export default FullCalendarPage;
