import SchedulerCalendar from "../components/SchedulerCalendar";
import usePageTitle from "../hooks/usePageTitle";

function MeetingSchedule() {
  usePageTitle("Jadwal Pertemuan | Komite Etik");

  return (
    <>
      <SchedulerCalendar />
    </>
  );
}

export default MeetingSchedule;
