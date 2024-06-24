import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useTokenValidation from "../hooks/useTokenValidation";
import { Toaster } from "react-hot-toast";

function DashboardLayout() {
  const { token, logout } = useContext(AuthContext);
  useTokenValidation(token, logout);

  return (
    <>
      {token ? (
        <div className="lg:grid lg:grid-cols-[18rem,1fr] lg:grid-rows-[auto,1fr] h-dvh">
          <SideBar />
          <main className="overflow-auto flex gap-3 flex-col px-5 md:px-12 pt-7 md:pt-12">
            <Outlet />
            <span className="text-xs md:text-sm text-center py-3">
              Copyright © <span className="text-color-primary">2024</span>{" "}
              <b>K-Etik</b> | Tim Ashborn
            </span>
          </main>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default DashboardLayout;
