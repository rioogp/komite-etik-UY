import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadDocument } from "../../services/documents";
import toast from "react-hot-toast";

export function useCreateDocument(onClose) {
  const queryClient = useQueryClient();

  const { mutate: createDocument, isPending: isCreating } = useMutation({
    mutationFn: uploadDocument,
    onSuccess: async () => {
      await queryClient.invalidateQueries("documents_user");
      toast.success("Dokumen berhasil ditambahkan!");
      onClose();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createDocument, isCreating };
}
