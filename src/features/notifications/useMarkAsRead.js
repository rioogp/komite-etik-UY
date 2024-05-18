import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markNotificationAsRead } from "../../services/notifications";

export function useMarkAsRead() {
  const queryClient = useQueryClient();

  const { mutate: markAsRead, isPending } = useMutation({
    mutationFn: markNotificationAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries("unreadNotifications");
    },
  });

  return { markAsRead, isPending };
}
