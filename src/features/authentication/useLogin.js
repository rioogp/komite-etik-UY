import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/auth";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function useLogin() {
  const navigate = useNavigate();
  const { loginContext } = useContext(AuthContext);

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ emailOrUsername, password }) =>
      loginApi({ emailOrUsername, password }),

    onSuccess: (user) => {
      const { token, data } = user;
      loginContext(token, data.user._id, data.user.role);
      toast.success("Login Berhasil");

      navigate("/home", { replace: true });
    },

    onError: () => {
      toast.error("Username/Email atau Password salah, silahkan coba lagi!");
    },
  });

  return { login, isPending };
}
