import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  const loginContext = (newToken, newUserId) => {
    setToken(newToken);
    setUserId(newUserId);
    localStorage.setItem("token", newToken);
    localStorage.setItem("userId", newUserId);
  };

  const logout = () => {
    setToken("");
    setUserId("");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider value={{ token, userId, loginContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
