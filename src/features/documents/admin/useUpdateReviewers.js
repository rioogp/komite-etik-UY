import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addReviewers } from "../../../services/documents";

export function useUpdateReviewers() {
  const queryClient = useQueryClient();

  const { mutate: updateReviewers, isPending: isUpdating } = useMutation({
    mutationFn: addReviewers,
    onSuccess: () => {
      toast.success("Berhasil menugaskan reviewer!");
      queryClient.invalidateQueries({ queryKey: ["documents"] });
    },
    onError: () => toast.error("Terjadi kesalahan saat menugaskan reviewer!"),
  });

  return { isUpdating, updateReviewers };
}
