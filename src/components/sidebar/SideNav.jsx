import { LuFileSpreadsheet } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings, CiCalendarDate, CiLogout } from "react-icons/ci";

import Image from "../Image";
import Button from "../Button";
import NavLinkRoute from "../NavLinkRoute";

function SideNav({ setTitle }) {
  const styleNav = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 font-semibold text-lg py-3 px-6 transition-colors duration-300 bg-white text-black rounded-md"
      : "flex items-center gap-3 font-semibold text-lg py-3 px-6 transition-colors duration-300 hover:text-white hover:bg-color-secondary rounded-md";

  function handleClick(title) {
    setTitle(title);
  }

  return (
    <div className="font-medium text-neutral-100 text-lg flex flex-col gap-5 tracking-[1px]">
      <span>Menu</span>
      <ul className="p-1 flex flex-col gap-3">
        <li>
          <NavLinkRoute
            style={styleNav}
            to="/berkas"
            onClick={() => handleClick("Berkas")}
          >
            <LuFileSpreadsheet size={24} />
            <span>Berkas</span>
          </NavLinkRoute>
        </li>
        <li>
          <NavLinkRoute
            style={styleNav}
            to="/rapat"
            onClick={() => handleClick("Jadwal Pertemuan")}
          >
            <CiCalendarDate size={24} />
            <span>Jadwal Pertemuan</span>
          </NavLinkRoute>
        </li>
        <li>
          <NavLinkRoute
            style={styleNav}
            to="/notifikasi"
            onClick={() => handleClick("Notifikasi")}
          >
            <IoIosNotificationsOutline size={24} />
            <span>Notifikasi</span>
          </NavLinkRoute>
        </li>
        <li>
          <NavLinkRoute
            style={styleNav}
            to="/pengaturan"
            onClick={() => handleClick("Pengaturan")}
          >
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
          <Button type="white">
            <CiLogout size={24} />
            Log Out
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
