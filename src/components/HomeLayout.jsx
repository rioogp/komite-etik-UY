import { Outlet } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import NavBar from "./NavBar";

function HomeLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default HomeLayout;
