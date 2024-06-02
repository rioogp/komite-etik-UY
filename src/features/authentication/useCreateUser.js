import toast from "react-hot-toast";
import { createUser as createuserApi } from "../../services/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateUser() {
  const queryClient = useQueryClient();
  const { mutate: createUser, isPending: isCreating } = useMutation({
    mutationFn: createuserApi,
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      toast.success("Berhasil menambahkan akun!");
    },

    onError: () => {
      toast.error(
        "Terjadi kesalahan saat menambahkan akun, silahkan coba lagi!"
      );
    },
  });

  return { createUser, isCreating };
}
