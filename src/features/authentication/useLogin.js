import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/auth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ emailOrUsername, password }) =>
      loginApi({ emailOrUsername, password }),
    onSuccess: (user) => {
      toast.success("Login successful");
      console.log(user);
      navigate("/berkas", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isPending };
}
