import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadDocument } from "../../services/documents";
import toast from "react-hot-toast";

export function useCreateDocument() {
  const queryClient = useQueryClient();

  const { mutate: createDocument, isPending: isCreating } = useMutation({
    mutationFn: uploadDocument,
    onSuccess: () => {
      toast.success("Dokumen berhasil ditambahkan!");
      queryClient.invalidateQueries("documents_user");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createDocument, isCreating };
}
