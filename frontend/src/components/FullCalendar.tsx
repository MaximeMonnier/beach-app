import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

interface calendarProps {
  id: number;
  users_id: string;
  terrain_id: number;
  date_start: string
  date_end: string;
}

// interface events {
//   title: string;
//   start: Date;
//   end: Date;
// }

const CalendarComponent: React.FC<calendarProps> = () => {
  const calendarStyle = {
    width: "100%",
    margin: "auto",
  };
  const [calendar, setCalendar] = useState<calendarProps[]>([]);

  useEffect(() => {
    fetchCalendar();
  }, []);

  const fetchCalendar = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get<calendarProps[]>(
        "http://localhost:8000/api/calendrier"
      );

      console.log(response.data);
      

      const events = response.data.map((item) => ({
        title: `Terrain ${item.terrain_id} réservé de ${item.date_start} à ${item.date_end}`,
        start: item.date_start,
        end: item.date_end,
      }));

      setCalendar(events);
      console.log(events);
    } catch (error) {
      console.log("Impossible d'afficher les reservations" + error);
    }
  };

  return (
    <div style={calendarStyle}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
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
        // Application des styles via la prop style
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        height="400px"
        events={calendar}
      />
    </div>
  );
};

export default CalendarComponent;
