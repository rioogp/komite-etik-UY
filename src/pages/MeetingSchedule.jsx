import { useEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";
import { useOutletContext } from "react-router-dom";
import { useMeetings } from "../features/meetings/useMeetings";
import SchedulerCalendar from "../features/meetings/SchedulerCalendar";
import MeetingTable from "../features/meetings/MeetingTable";
import HeadDashboard from "../components/HeadDashboard";
import CreateFormMeetings from "../features/meetings/CreateFormMeetings";

function MeetingSchedule() {
  const [setValTitle] = useOutletContext();
  const { isLoading, meetings } = useMeetings();

  // Ensure hooks are called unconditionally in the component body
  usePageTitle("Jadwal Pertemuan | Komite Etik");
  useEffect(() => {
    setValTitle("Jadwal Pertemuan");
  }, [setValTitle]);

  if (isLoading || !meetings) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col gap-20">
      <SchedulerCalendar meetings={meetings} />
      <HeadDashboard
        title="Jadwal Pertemuan"
        subtitle="Ajukan Jadwal Pertemuan Sesuai dengan Kebutuhan"
        add="add"
        modalTitle="Atur Jadwal Pertemuan"
        modalSubtitle="Ajukan jadwal pertemuan sesuai dengan kebutuhan"
      >
        <CreateFormMeetings />
      </HeadDashboard>
      <MeetingTable meetings={meetings} />
    </main>
  );
}

export default MeetingSchedule;
