import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";
import Title from "./Title";
import { useContext } from "react";
import { TitleContext } from "../contexts/TitleContext";

function DashboardLayout() {
  const { title, setTitle } = useContext(TitleContext);

  return (
    <div className="grid grid-cols-[23rem,1fr] grid-rows-[auto,1fr] h-dvh">
      <SideBar setTitle={setTitle} />
      <main className="overflow-scroll flex flex-col gap-14">
        <Title title={title} />
        <div className="flex flex-col px-20 mb-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
