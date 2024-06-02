import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../services/user";

export function useUserById(id) {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user_by_id"],
    queryFn: () => getUserById(id),
  });

  return { isLoading, user };
}
