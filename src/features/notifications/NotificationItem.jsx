import { IoNotifications } from "react-icons/io5";
import Heading from "../../components/Heading";

function NotificationItem({ title, message }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center gap-4">
        <IoNotifications size={40} style={{ color: "#13A795" }} />
        <div className="flex flex-col">
          <Heading type="notifTitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Heading>
          <span className="font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
            libero eu tellus rhoncus lacinia. Ut eget nisi quis ipsum convallis
            interdum.
          </span>
        </div>
      </div>
      <div className="border-t border-slate-300"></div>
    </div>
  );
}

export default NotificationItem;
