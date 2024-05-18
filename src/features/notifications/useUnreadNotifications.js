import { useQuery } from "@tanstack/react-query";
import { getUnreadNotifications } from "../../services/notifications";

export function useUnreadNotifications() {
  const { isLoading, data: unreadNotifications } = useQuery({
    queryKey: ["unreadNotifications"],
    queryFn: getUnreadNotifications,
  });

  return { isLoading, unreadNotifications };
}
