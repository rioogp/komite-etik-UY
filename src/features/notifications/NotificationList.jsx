import Heading from "../../components/Heading";
import NotificationItem from "./NotificationItem";

function NotificationList() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Heading type="custom" fontSize="text-4xl">
          Notifikasi
        </Heading>
        <span className="text-2xl text-slate-500">wokokwofokwf</span>
      </div>
      <div className="border-t border-slate-300"></div>

      <div className="flex flex-col gap-10 px-5">
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>
    </div>
  );
}

export default NotificationList;
