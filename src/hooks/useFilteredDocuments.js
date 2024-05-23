import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDocumentsByuser } from "../features/documents/useDocumentsByUser";
import { useDocuments } from "../features/documents/useDocuments";

const useFilteredDocuments = (byUser = true) => {
  const [searchParams] = useSearchParams();
  const filterFromUrl = searchParams.get("filter") || "terbaru";

  const hook = byUser ? useDocumentsByuser : useDocuments;
  const { documents, isLoading, refetch } = hook(filterFromUrl);

  useEffect(() => {
    refetch();
  }, [filterFromUrl, refetch]);

  return { documents, isLoading };
};

export default useFilteredDocuments;
