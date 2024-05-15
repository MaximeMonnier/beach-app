import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import frLocale from "@fullcalendar/core/locales/fr";

interface CalendarProps {
  id: number;
  users_id: string;
  terrain_id: number;
  date_start: string;
  date_end: string;
}

const CalendarComponent: React.FC = () => {
  const calendarStyle = {
    width: "100%",
    margin: "auto",
  };
  const [calendar, setCalendar] = useState<CalendarProps[]>([]);

  useEffect(() => {
    fetchCalendar();
  }, []);

  const fetchCalendar = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get<CalendarProps[]>(
        "http://localhost:8000/api/calendrier"
      );

      console.log(response.data);

      const events = response.data.map((item) => ({
        title: `Terrain ${item.terrain_id} réservé`,
        start: item.date_start,
        end: item.date_end,
      }));

      setCalendar(events);
      console.log(events);
    } catch (error) {
      console.log("Impossible d'afficher les réservations : " + error);
    }
  };

  return (
    <div style={calendarStyle}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={frLocale}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        customButtons={{
          myCustomButton: {
            text: "button",
            click: function () {
              alert("Clicked the custom button!");
            },
          },
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        height="400px"
        events={calendar}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
        }}
        displayEventEnd={true}
      />
    </div>
  );
};

export default CalendarComponent;
