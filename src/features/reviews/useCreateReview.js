import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReview as createReviewApi } from "../../services/reviews";
import toast from "react-hot-toast";

export function useCreateReview() {
  const queryClient = useQueryClient();

  const { mutate: createReview, isPending } = useMutation({
    mutationFn: createReviewApi,
    onSuccess: () => {
      toast.success("Berhasil membuat review");
      queryClient.invalidateQueries("reviews");
    },

    onError: (err) => {
      toast.error("Terjadi kesalahan saat menambah review");
    },
  });

  return { createReview, isPending };
}
