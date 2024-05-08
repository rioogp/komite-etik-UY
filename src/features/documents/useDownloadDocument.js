import { useMutation, useQuery } from "@tanstack/react-query";
import { downloadDocument as downloadDocumentApi } from "../../services/documents";
import toast from "react-hot-toast";

export function useDownloadDocument() {
  const { isPending, mutate: downloadDocument } = useMutation({
    mutationFn: downloadDocumentApi,
    onSuccess: () => {
      toast.success("Berhasil mendownload document!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan saat mendownload document!");
    },
  });

  return { isPending, downloadDocument };
}
