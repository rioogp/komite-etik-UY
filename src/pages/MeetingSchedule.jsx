import usePageTitle from "../hooks/usePageTitle";
import { useMeetings } from "../features/meetings/useMeetings";
import SchedulerCalendar from "../features/meetings/SchedulerCalendar";
import MeetingTable from "../features/meetings/MeetingTable";
import HeadDashboard from "../components/HeadDashboard";
import CreateAndUpdateFormMeeting from "../features/meetings/CreateAndUpdateFormMeetings";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CircularProgress } from "@mui/material";

function MeetingSchedule() {
  const { isLoading, meetings } = useMeetings();
  const { role } = useContext(AuthContext);
  usePageTitle("Jadwal Pertemuan | Komite Etik");

  if (isLoading || !meetings) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-20">
      <SchedulerCalendar meetings={meetings} />
      <HeadDashboard
        title="Jadwal Pertemuan"
        subtitle="Ajukan Jadwal Pertemuan Sesuai dengan Kebutuhan"
        add={role === "ketua" ? "add" : null}
        buttonAddTitle="Ajukan"
        modalTitle="Atur Jadwal Pertemuan"
        modalSubtitle="Ajukan jadwal pertemuan sesuai dengan kebutuhan"
        position="justify-end"
      >
        {role === "ketua" && <CreateAndUpdateFormMeeting />}
      </HeadDashboard>
      <MeetingTable meetings={meetings} />
    </main>
  );
}

export default MeetingSchedule;
