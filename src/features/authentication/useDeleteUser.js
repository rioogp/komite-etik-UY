import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteUser as deleteUserApi } from "../../services/user";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const { isPending, mutate: deleteUser } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      toast.success("Berhasil menghapus data user");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: () => toast.error("Terjadi kesalahan saat menghapus data user"),
  });

  return { isPending, deleteUser };
}
