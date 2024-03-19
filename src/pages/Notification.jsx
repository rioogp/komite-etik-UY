import NotificationList from "../features/notifications/NotificationList";
import usePageTitle from "../hooks/usePageTitle";

function Notification() {
  usePageTitle("Notifikasi | Komite Etik");

  return (
    <>
      <NotificationList />
    </>
  );
}

export default Notification;
