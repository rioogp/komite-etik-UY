import { useQuery } from "@tanstack/react-query";
import { getDocuments } from "../../services/documents";

export function useDocuments() {
  const { isLoading, data: documents } = useQuery({
    queryKey: ["documents"],
    queryFn: getDocuments,
  });

  return { isLoading, documents };
}
