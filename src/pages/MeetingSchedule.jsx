import { useEffect } from "react";
import SchedulerCalendar from "../components/SchedulerCalendar";
import usePageTitle from "../hooks/usePageTitle";
import { useOutletContext } from "react-router-dom";

function MeetingSchedule() {
  const [setTitle] = useOutletContext();

  setTitle("Jadwal Pertemuan");
  usePageTitle("Jadwal Pertemuan | Komite Etik");

  return (
    <>
      <SchedulerCalendar />
    </>
  );
}

export default MeetingSchedule;
