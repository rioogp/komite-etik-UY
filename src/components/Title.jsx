import Heading from "./Heading";
import { CiSettings, CiCalendarDate } from "react-icons/ci";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";

function Title({ title }) {
  let icon;
  if (title === "Berkas") {
    icon = <LuFileSpreadsheet size={35} />;
  } else if (title === "Jadwal Pertemuan") {
    icon = <CiCalendarDate size={40} />;
  } else if (title === "Notifikasi") {
    icon = <IoIosNotificationsOutline size={40} />;
  } else if (title === "Pengaturan") {
    icon = <CiSettings size={38} />;
  }

  return (
    <div className="px-7 py-5 bg-heading-primary flex items-center gap-4">
      {icon && <div>{icon}</div>}
      <Heading type="hometitle">{title}</Heading>
    </div>
  );
}

export default Title;
