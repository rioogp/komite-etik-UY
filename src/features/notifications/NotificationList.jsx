import NotificationItem from "./NotificationItem";
import { useNotifications } from "./useNotifications";

function NotificationList() {
  const { isLoading, notifications } = useNotifications();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(notifications);
  return (
    <div className="flex flex-col gap-10 px-1 md:px-5">
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <NotificationItem
            notification={notification}
            key={notification._id}
          />
        ))
      ) : (
        <div className="text-center text-black text-base md:text-xl font-semibold">
          Tidak ada notifikasi terkini
        </div>
      )}
    </div>
  );
}

export default NotificationList;
