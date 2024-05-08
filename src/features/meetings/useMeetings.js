import { useQuery } from "@tanstack/react-query";
import { getMeetings } from "../../services/meetings";

export function useMeetings() {
  const {
    isLoading,
    data: meetings,
    error,
  } = useQuery({
    queryKey: ["meetings"],
    queryFn: getMeetings,
  });

  return { isLoading, meetings, error };
}
