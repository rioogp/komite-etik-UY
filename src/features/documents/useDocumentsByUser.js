import { useQuery } from "@tanstack/react-query";
import { getDocumentsByUser } from "../../services/documents";

export function useDocumentsByuser() {
  const {
    isLoading,
    data: documents,
    error,
  } = useQuery({
    queryKey: ["documents_user"],
    queryFn: getDocumentsByUser,
  });

  return { isLoading, documents, error };
}
