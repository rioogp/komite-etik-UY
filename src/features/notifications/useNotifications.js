import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../../services/notifications";

export function useNotifications() {
  const { isLoading, data: notifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
  });
  console.log(notifications);
  return { isLoading, notifications };
}
