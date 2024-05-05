import { useMutation } from "@tanstack/react-query";
import { forgotPassword as forgotPasswordApi } from "../../services/auth";
import toast from "react-hot-toast";

export function useForgotPassword() {
  const { mutate: forgotPassword, isPending } = useMutation({
    mutationFn: forgotPasswordApi,
    onSuccess: () => {
      toast.success("Link tautan berhasil dikirim!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { forgotPassword, isPending };
}
