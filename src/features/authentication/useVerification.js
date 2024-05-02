import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { verifyEmail as verifyEmailApi } from "../../services/auth";
import { resendVerification as resendVerificationApi } from "../../services/auth";

export function useVerification() {
  const { mutate: verifyEmail } = useMutation({
    mutationFn: verifyEmailApi,
    onSuccess: () => {
      toast.success("Email berhasil diverifikasi!");
    },
    onError: (error) => {
      toast.error(
        error.message || "Terjadi kesalahan saat memverifikasi email."
      );
    },
  });

  const { mutate: resendVerification } = useMutation({
    mutationFn: resendVerificationApi,
    onSuccess: () => {
      toast.success("Email verifikasi berhasil dikirim!");
    },
    onError: (error) => {
      toast.error(
        error.message || "Terjadi kesalahan saat mengirim email verifikasi."
      );
    },
  });

  return { verifyEmail, resendVerification };
}
