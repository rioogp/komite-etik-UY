import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // Perhatikan impor ini harus sesuai
import { getCookie } from "../utils/helpers";
import { useQueryClient } from "@tanstack/react-query";

export const AuthContext = createContext();

function setCookie(name, value, days = 1) {
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Strict`;
}

function deleteCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

function decodeToken(token) {
  try {
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}

function AuthProvider({ children }) {
  const queryClient = useQueryClient();
  const initialToken = getCookie("token");
  const decoded = decodeToken(initialToken);

  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(decoded ? decoded.id : "");
  const [role, setRole] = useState(decoded ? decoded.role : "");

  useEffect(() => {
    const storedToken = getCookie("token");
    if (storedToken && storedToken !== token) {
      const decoded = decodeToken(storedToken);
      if (decoded) {
        setToken(storedToken);
        setUserId(decoded.id);
        setRole(decoded.role);
      }
    }
  }, [token]);

  const loginContext = (newToken) => {
    const decoded = decodeToken(newToken);
    setToken(newToken);
    setUserId(decoded ? decoded.id : "");
    setRole(decoded ? decoded.role : "");
    setCookie("token", newToken);
  };

  const logout = () => {
    setToken("");
    setUserId("");
    setRole("");
    deleteCookie("token");
    queryClient.clear();
  };

  return (
    <AuthContext.Provider value={{ token, userId, role, loginContext, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
