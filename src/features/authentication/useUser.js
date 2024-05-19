import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/user";

export function useUser() {
  const token = localStorage.getItem("token");

  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    enabled: !!token,
  });

  return { isLoading, user };
}
