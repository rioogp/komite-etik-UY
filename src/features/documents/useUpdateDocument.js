import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDocument as updateDocumentApi } from "../../services/documents";
import toast from "react-hot-toast";

export function useUpdateDocument(onClose) {
  const queryClient = useQueryClient();

  const { mutate: updateDocument, isPending: isUpdating } = useMutation({
    mutationFn: updateDocumentApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries("documents_user");
      await queryClient.invalidateQueries("documents");
      toast.success("Dokumen berhasil diupdate!");
      onClose();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateDocument, isUpdating };
}
