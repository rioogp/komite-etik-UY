import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup as signupApi } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success("Registrasi berhasil!");
      console.log(data.data.user.email);
      localStorage.setItem("email", data.data.user.email);
      navigate("/verification");
    },

    onError: (err) => {
      console.log(err);
      if (err.message.includes("username")) {
        toast.error("Username sudah terdaftar");
      } else if (err.message.includes("email")) {
        toast.error("Email sudah terdaftar");
      } else {
        toast.error("Registrasi gagal! silahkan coba lagi.");
      }
    },
  });

  return { signup, isPending };
}
