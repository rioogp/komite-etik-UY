import { IoNotifications } from "react-icons/io5";
import Heading from "../../components/Heading";

function NotificationItem({ notification }) {
  const { name, description } = notification;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center gap-4">
        <IoNotifications size={24} style={{ color: "#13A795" }} />
        <div className="flex flex-col basis-11/12">
          <Heading type="notifTitle">{name}</Heading>
          <span className="font-medium text-xs">{description}</span>
        </div>
      </div>
      <div className="border-t border-slate-300"></div>
    </div>
  );
}

export default NotificationItem;
