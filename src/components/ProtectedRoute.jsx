import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { token, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      const decodedToken = jwtDecode(token);
      const expirationTime = new Date(decodedToken.exp * 1000).getTime();
      const currentTime = new Date().getTime();
      console.log(expirationTime, currentTime);

      if (currentTime > expirationTime) {
        logout();
        navigate("/", { replace: true });
      }
    }
  }, [navigate, token]);

  return children;
}

export default ProtectedRoute;
