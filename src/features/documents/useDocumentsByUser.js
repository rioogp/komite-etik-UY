import { useQuery } from "@tanstack/react-query";
import { getDocumentsByUser } from "../../services/documents";

export function useDocumentsByuser(filter = "terbaru") {
  const {
    isLoading,
    data: documents,
    error,
    refetch,
  } = useQuery({
    queryKey: ["documents_user"],
    queryFn: () => getDocumentsByUser(filter),
  });

  return { isLoading, documents, error, refetch };
}
