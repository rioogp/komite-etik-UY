import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDocument as updateDocumentApi } from "../../services/documents";
import toast from "react-hot-toast";

export function useUpdateDocument() {
  const queryClient = useQueryClient();

  const { mutate: updateDocument, isPending: isUpdating } = useMutation({
    mutationFn: updateDocumentApi,
    onSuccess: () => {
      toast.success("Dokumen berhasil diupdate!");
      queryClient.invalidateQueries("documents_user");
      queryClient.invalidateQueries("documents");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateDocument, isUpdating };
}
