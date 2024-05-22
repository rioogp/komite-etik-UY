import { useMutation } from "@tanstack/react-query";
import { updatePassword as updatePasswordApi } from "../../services/user";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useUpdatePassword(logout) {
  const navigate = useNavigate();
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updatePasswordApi,
    onSuccess: () => {
      toast.success("Password berhasil diperbarui, silahkan login kembali!");
      navigate("/login", { replace: true });
      logout();
    },
    onError: (error) => {
      console.log(error);
      if (error.message === "Your current password is wrong") {
        toast.error("Password lama Anda tidak valid!");
      } else {
        toast.error("Terjadi kesalahan saat memperbarui password!");
      }
    },
  });

  return { updatePassword, isUpdating };
}
