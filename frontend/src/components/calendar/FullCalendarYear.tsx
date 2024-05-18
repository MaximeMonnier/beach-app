import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import frLocale from "@fullcalendar/core/locales/fr";


const FullCalendarYear: React.FC = () => {
  const events = [
    { title: "Événement 1", date: "2024-05-15" },
    { title: "Événement 2", date: "2024-05-16" },
    { title: "Événement 3", date: "2024-05-17" },
    { title: "Événement 4", date: "2024-05-18" },
  ];

  return (
    <div className="pt-6 px-6 rounded-xl bg-bg-1 h-full">
      <div className="h-full text-color-3">
        <FullCalendar
          plugins={[multiMonthPlugin, dayGridPlugin, interactionPlugin]}
          initialView="multiMonthYear" // Utiliser la vue annuelle
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay",
          }}
          locale={frLocale}
          locales={[frLocale]}
          events={events}
          weekends={true}
          height="100%"
          // Options spécifiques pour la vue multi-mois
          multiMonthMaxColumns={3} // Max 3 colonnes
          multiMonthMinWidth={300} // Largeur minimale de chaque mois
          dayHeaderClassNames="custom-daygrid-day"
          dayCellClassNames="custom-daygrid-day"
          eventClassNames="custom-daygrid-event"
        />
      </div>
    </div>
  );
};

export default FullCalendarYear;