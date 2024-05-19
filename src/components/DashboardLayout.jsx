import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useTokenValidation from "../hooks/useTokenValidation";

function DashboardLayout() {
  const { token, logout } = useContext(AuthContext);
  useTokenValidation(token, logout);

  return token ? (
    <div className="grid grid-cols-[23rem,1fr] grid-rows-[auto,1fr] h-dvh">
      <SideBar />
      <main className="overflow-auto flex flex-col px-20 mb-10 py-14">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

export default DashboardLayout;
