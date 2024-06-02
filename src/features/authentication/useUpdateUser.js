import toast from "react-hot-toast";
import { updateUser as updateUserApi } from "../../services/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      toast.success("Berhasil merubah data akun!");
    },
    onError: () => {
      toast.error(
        "Terjadi kesalahan saat merubah data akun, silahkan coba lagi!"
      );
    },
  });

  return { updateUser, isUpdating };
}
