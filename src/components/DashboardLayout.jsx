import { Navigate, Outlet, useNavigate } from "react-router-dom";
import SideBar from "./sidebar/SideBar";
import { useContext } from "react";
import { TitleContext } from "../contexts/TitleContext";
import { AuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function DashboardLayout() {
  const { title, setValTitle } = useContext(TitleContext);
  const { token, logout } = useContext(AuthContext);
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
        }
      } catch (error) {
        logout();
        navigate("/login");
      }
    }
  }, [token, logout]);

  return token ? (
    <div className="grid grid-cols-[23rem,1fr] grid-rows-[auto,1fr] h-dvh">
      <SideBar />
      <main className="overflow-scroll flex flex-col px-20 mb-10 py-14">
        <Outlet context={[setValTitle]} />
      </main>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

export default DashboardLayout;
