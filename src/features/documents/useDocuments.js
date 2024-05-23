import { useQuery } from "@tanstack/react-query";
import { getDocuments } from "../../services/documents";

export function useDocuments(filter = "terlama") {
  const {
    isLoading,
    data: documents,
    refetch,
  } = useQuery({
    queryKey: ["documents"],
    queryFn: () => getDocuments(filter),
  });

  return { isLoading, documents, refetch };
}
