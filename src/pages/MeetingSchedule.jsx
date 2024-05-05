import { useEffect } from "react";
import SchedulerCalendar from "../components/SchedulerCalendar";
import usePageTitle from "../hooks/usePageTitle";
import { useOutletContext } from "react-router-dom";

function MeetingSchedule() {
  const [setValTitle] = useOutletContext();

  useEffect(() => {
    setValTitle("Jadwal Pertemuan");
  }, []);
  usePageTitle("Jadwal Pertemuan | Komite Etik");

  return (
    <>
      <SchedulerCalendar />
    </>
  );
}

export default MeetingSchedule;
