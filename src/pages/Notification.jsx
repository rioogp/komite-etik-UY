import { useOutletContext } from "react-router-dom";
import NotificationList from "../features/notifications/NotificationList";
import usePageTitle from "../hooks/usePageTitle";
import HeadDashboard from "../components/HeadDashboard";
import { useEffect } from "react";

function Notification() {
  const [setValTitle] = useOutletContext();

  useEffect(() => {
    setValTitle("Notifikasi");
  }, []);
  usePageTitle("Notifikasi | Komite Etik");

  return (
    <>
      <HeadDashboard
        title="Notifikasi"
        subtitle="Beberapa aktivitas notifikasi"
      />
      <NotificationList />
    </>
  );
}

export default Notification;
