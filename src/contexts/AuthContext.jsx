import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");

  const loginContext = (newToken, newUserId, role) => {
    setToken(newToken);
    setUserId(newUserId);
    setRole(role);
    localStorage.setItem("token", newToken);
    localStorage.setItem("userId", newUserId);
    localStorage.setItem("role", role);
  };

  const logout = () => {
    setToken("");
    setUserId("");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ token, userId, role, loginContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
