import { useQuery } from "@tanstack/react-query";
import { getDocument } from "../../services/documents";

export function useDocument(id) {
  const { isLoading, data: document } = useQuery({
    queryKey: ["document", id],
    queryFn: () => getDocument(id),
    enabled: !!id,
  });

  return { isLoading, document };
}
