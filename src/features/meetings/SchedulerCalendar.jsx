import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../styles/global.css";
import { useEffect } from "react";

function SchedulerCalendar({ meetings }) {
  const events = meetings.map((meeting) => ({
    title: meeting.nameMeeting,
    start: meeting.meetingSchedule,
  }));

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
    return (
      <div className="bg-color-primary w-fit h-fit text-white p-1 md:p-2 md:text-xs rounded-lg shadow-md overflow-hidden">
        <span className="block overflow-hidden whitespace-normal overflow-wrap-anywhere max-w-[8rem]">
          {eventInfo.event.title}
        </span>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full h-fit text-center text-xs p-5 border-2 border-gray-200 rounded-xl shadow-lg">
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
