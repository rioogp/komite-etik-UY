import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/user";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { isLoading, user };
}
