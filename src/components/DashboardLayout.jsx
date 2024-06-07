import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useTokenValidation from "../hooks/useTokenValidation";

function DashboardLayout() {
  const { token, logout } = useContext(AuthContext);
  useTokenValidation(token, logout);

  return token ? (
    <div className="lg:grid lg:grid-cols-[18rem,1fr] lg:grid-rows-[auto,1fr] h-dvh">
      <SideBar />
      <main className="overflow-auto flex flex-col px-5 md:px-12 pt-7 md:pt-12">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

export default DashboardLayout;
