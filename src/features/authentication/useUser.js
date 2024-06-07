import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/user";
import { getCookie } from "../../utils/helpers";

export function useUser() {
  const token = getCookie("token");

  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    enabled: !!token,
    refetchOnWindowFocus: false,
  });

  return { isLoading, user };
}
