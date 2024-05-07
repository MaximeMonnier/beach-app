import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarComponent: React.FC = () => {
  const calendarStyle = {
    width: "100%",
    margin: "auto",
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
        events={[
          { title: "Reserver de 10h à midi", date: "2024-04-22" },
          { title: "event 2", date: "2024-04-23" },
        ]}
      />
    </div>
  );
};

export default CalendarComponent;
