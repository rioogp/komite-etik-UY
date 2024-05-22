import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateName as updateNameApi } from "../../services/user";
import toast from "react-hot-toast";

export function useUpdateName() {
  const queryClient = useQueryClient();

  const { mutate: updateName, isLoading: isUpdating } = useMutation({
    mutationFn: updateNameApi,
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      toast.success("Nama berhasil diperbarui!");
    },

    onError: () => {
      toast.error("Terjadi kesalahan saat memperbarui nama!");
    },
  });

  return { updateName, isUpdating };
}
