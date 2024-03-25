import Heading from "../../components/Heading";
import NotificationItem from "./NotificationItem";

function NotificationList() {
  return (
    <div className="flex flex-col gap-10 px-5">
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
    </div>
  );
}

export default NotificationList;
