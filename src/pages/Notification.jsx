import { useOutletContext } from "react-router-dom";
import NotificationList from "../features/notifications/NotificationList";
import usePageTitle from "../hooks/usePageTitle";

function Notification() {
  const [setTitle] = useOutletContext();

  setTitle("Notifikasi");
  usePageTitle("Notifikasi | Komite Etik");

  return (
    <>
      <NotificationList />
    </>
  );
}

export default Notification;
