import { LuFileSpreadsheet } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings, CiCalendarDate, CiLogout } from "react-icons/ci";

import Image from "../Image";
import NavLinkRoute from "../NavLinkRoute";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../utils/theme";
import { Button } from "@mui/material";

function SideNav() {
  const styleNav = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 font-semibold text-lg py-3 px-6 transition-colors duration-300 bg-white text-black rounded-md"
      : "flex items-center gap-3 font-semibold text-lg py-3 px-6 transition-colors duration-300 hover:text-white hover:bg-color-secondary rounded-md";

  return (
    <div className="font-medium text-neutral-100 text-lg flex flex-col gap-5 tracking-[1px]">
      <span>Menu</span>
      <ul className="p-1 flex flex-col gap-3">
        <li>
          <NavLinkRoute style={styleNav} to="/berkas">
            <LuFileSpreadsheet size={24} />
            <span>Berkas</span>
          </NavLinkRoute>
        </li>
        <li>
          <NavLinkRoute style={styleNav} to="/rapat">
            <CiCalendarDate size={24} />
            <span>Jadwal Pertemuan</span>
          </NavLinkRoute>
        </li>
        <li>
          <NavLinkRoute style={styleNav} to="/notifikasi">
            <IoIosNotificationsOutline size={24} />
            <span>Notifikasi</span>
          </NavLinkRoute>
        </li>
        <li>
          <NavLinkRoute style={styleNav} to="/pengaturan">
            <CiSettings size={24} />
            <span>Pengaturan</span>
          </NavLinkRoute>
        </li>
        <li className="my-6">
          <div className="border-t border-white"></div>
        </li>
        <li className="flex flex-col gap-3">
          <span>Profile</span>
          <div className="flex flex-row gap-3 items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png"
              alt="profile"
              type="profile"
            />
            <div className="flex flex-col ">
              <span className="text-semibold text-base">
                Hafidz Putra Herlyansyah
              </span>
              <span className="text-base">hafidzph@gmail.com</span>
            </div>
          </div>
        </li>
        <li>
          <ThemeProvider theme={theme}>
            <Button
              sx={{
                marginTop: "20px",
                fontWeight: "600",
                fontSize: "20px",
                textTransform: "none",
              }}
              variant="contained"
              color="info"
              className="w-full h-12 flex gap-3 justify-center items-center"
            >
              <CiLogout size={26} />
              Log Out
            </Button>
          </ThemeProvider>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
