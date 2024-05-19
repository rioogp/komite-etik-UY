import { useQuery } from "@tanstack/react-query";
import { getStatistics } from "../../services/statistics";

export function useStatistics() {
  const { isLoading, data: statistics } = useQuery({
    queryKey: ["statistics"],
    queryFn: getStatistics,
  });

  return { isLoading, statistics };
}
