import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useResetPassword() {
  const navigate = useNavigate();

  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: resetPasswordApi,
    onSuccess: () => {
      toast.success("Berhasil ubah password!");
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { resetPassword, isPending };
}
