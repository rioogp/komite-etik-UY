import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateStatusReviewers } from "../../../services/documents";

export function useUpdateStatusReviewers(onClose) {
  const queryClient = useQueryClient();

  const { mutate: updateStatus, isPending: isUpdating } = useMutation({
    mutationFn: updateStatusReviewers,
    onSuccess: () => {
      toast.success("Status dokumen berhasil dikirim!");
      queryClient.invalidateQueries({ queryKey: ["documents"] });
      onClose();
    },
    onError: () => toast.error("Terjadi kesalahan saat mengirim status!"),
  });

  return { isUpdating, updateStatus };
}
