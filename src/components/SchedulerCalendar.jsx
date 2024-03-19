import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../styles/global.css";
import { useEffect } from "react";

function SchedulerCalendar() {
  const events = [
    {
      title: "Meeting",
      start: "2024-02-26T10:00:00",
      end: "2024-02-26T11:00:00",
    },
    {
      title: "Meeting",
      start: "2024-02-07T15:30:00",
      end: "2024-02-07T16:30:00",
    },
    {
      title: "Meeting",
      start: "2024-02-29T09:00:00",
      end: "2024-02-29T10:00:00",
    },
  ];

  useEffect(() => {
    const nextButton = document.querySelector(".fc-next-button");
    const prevButton = document.querySelector(".fc-prev-button");
    document.querySelectorAll("td.fc-daygrid-day").forEach(function (cell) {
      cell.style.height = "100px";
    });

    if (nextButton && prevButton) {
      nextButton.classList.remove("fc-button", "fc-button-primary");
      prevButton.classList.remove("fc-button", "fc-button-primary");
    }
  }, []);

  const renderEventContent = (eventInfo) => {
    const startTime = new Date(eventInfo.event.start).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const endTime = new Date(eventInfo.event.end).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <div
        className="bg-color-primary w-fit h-auto 
      text-white p-1 md:p-2 text-xs rounded-lg shadow-md flex flex-col flex-wrap overflow-hidden"
      >
        <div>{eventInfo.event.title}</div>
        <div className="text-xs">
          {startTime} - {endTime}
        </div>
      </div>
    );
  };

  // useEffect(() => {
  //   events.forEach((event) => {
  //     const tableCell = document.querySelector(
  //       `.fc-daygrid-day[data-date="${event.date}"]`
  //     );
  //     const dayNumber = tableCell.querySelector(".fc-daygrid-day-number");

  //     if (tableCell && dayNumber) {
  //       tableCell.style.backgroundColor = "black";
  //       tableCell.style.borderRadius = "10px";
  //       dayNumber.style.color = "white";
  //     }
  //   });
  // }, [events]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-[95%] h-fit text-center p-10 border-2 border-gray-200 rounded-xl shadow-lg">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          firstDay="1"
          locale="id"
          headerToolbar={{
            start: "prev",
            center: "title",
            end: "next",
          }}
          aspectRatio={1.5}
          events={events}
          eventContent={renderEventContent}
        />
      </div>
    </div>
  );
}

export default SchedulerCalendar;
