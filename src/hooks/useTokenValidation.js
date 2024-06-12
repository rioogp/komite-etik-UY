import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

const useTokenValidation = (token, logout) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const expirationTime = new Date(decodedToken.exp * 1000);
        const currentTime = new Date();

        if (currentTime > expirationTime) {
          logout();
          navigate("/login");
          toast.error("Sesi anda sudah berakhir, silahkan masuk kembali.");
        }
      } catch (error) {
        logout();
        navigate("/login");
      }
    }
  }, [token, logout, navigate]);
};

export default useTokenValidation;
