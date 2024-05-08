import { LuFileSpreadsheet } from "react-icons/lu";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { CiSettings, CiCalendarDate, CiLogout } from "react-icons/ci";
import { FaRegFolder } from "react-icons/fa6";

import Image from "../Image";
import NavLinkRoute from "../NavLinkRoute";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../utils/theme";
import { Button, Collapse, Divider } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../features/authentication/useUser";

function SideNav() {
  const { logout, role } = useContext(AuthContext);
  const { user, isLoading } = useUser();

  const navigate = useNavigate();
  const styleNav = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 font-semibold text-lg py-3 px-6 transition-colors duration-300 bg-white text-black rounded-md"
      : "flex items-center gap-3 font-semibold text-lg py-3 px-6 transition-colors duration-300 hover:text-white hover:bg-color-secondary rounded-md";

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }

  const roleMenus = {
    user: [
      <CollapseButton styleNav={styleNav} userRole={role} />,

      <NavLinkRoute style={styleNav} to="/notifikasi">
        <IoIosNotificationsOutline size={28} />
        <span>Notifikasi</span>
      </NavLinkRoute>,
    ],
    admin: [
      <CollapseButton styleNav={styleNav} userRole={role} />,
      <NavLinkRoute style={styleNav} to="/notifikasi">
        <IoIosNotificationsOutline size={28} />
        <span>Notifikasi</span>
      </NavLinkRoute>,
      <NavLinkRoute style={styleNav} to="/rapat">
        <CiCalendarDate size={28} />
        <span>Jadwal Pertemuan</span>
      </NavLinkRoute>,
    ],
    reviewer: [
      <NavLinkRoute style={styleNav} to="/berkas">
        <FaRegFolder size={28} />
        <span>Berkas</span>
      </NavLinkRoute>,
      <NavLinkRoute style={styleNav} to="/notifikasi">
        <IoIosNotificationsOutline size={28} />
        <span>Notifikasi</span>
      </NavLinkRoute>,
      <NavLinkRoute style={styleNav} to="/rapat">
        <CiCalendarDate size={28} />
        <span>Jadwal Pertemuan</span>
      </NavLinkRoute>,
    ],
    ketua: [
      <NavLinkRoute style={styleNav} to="/berkas">
        <FaRegFolder size={28} />
        <span>Berkas</span>
      </NavLinkRoute>,
      <NavLinkRoute style={styleNav} to="/notifikasi">
        <IoIosNotificationsOutline size={28} />
        <span>Notifikasi</span>
      </NavLinkRoute>,
      <NavLinkRoute style={styleNav} to="/rapat">
        <CiCalendarDate size={28} />
        <span>Jadwal Pertemuan</span>
      </NavLinkRoute>,
    ],
  };

  return (
    <div className="font-medium text-neutral-100 text-lg flex flex-col gap-5 tracking-[1px]">
      <span>Menu</span>
      <ul className="p-1 flex flex-col gap-3">
        <ThemeProvider theme={theme}>
          {roleMenus[role].map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
          <li className="my-5">
            <Divider style={{ background: "white", width: "auto" }} />
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
                  {isLoading ? "" : user.name}
                </span>
                <span className="text-base">{isLoading ? "" : user.email}</span>
              </div>
            </div>
          </li>
          <li>
            <Button
              onClick={handleLogout}
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
          </li>
        </ThemeProvider>
      </ul>
    </div>
  );
  // return (
  //   <div className="font-medium text-neutral-100 text-lg flex flex-col gap-5 tracking-[1px]">
  //     <span>Menu</span>
  //     <ul className="p-1 flex flex-col gap-3">
  //       <ThemeProvider theme={theme}>
  //         <li>
  //           <CollapseButton styleNav={styleNav} />
  //         </li>
  //         <li>
  //           <NavLinkRoute style={styleNav} to="/rapat">
  //             <CiCalendarDate size={28} />
  //             <span>Jadwal Pertemuan</span>
  //           </NavLinkRoute>
  //         </li>
  //         <li>
  //           <NavLinkRoute style={styleNav} to="/notifikasi">
  //             <IoIosNotificationsOutline size={28} />
  //             <span>Notifikasi</span>
  //           </NavLinkRoute>
  //         </li>
  //         <li>
  //           <NavLinkRoute style={styleNav} to="/pengaturan">
  //             <CiSettings size={28} />
  //             <span>Pengaturan</span>
  //           </NavLinkRoute>
  //         </li>

  //         <li className="my-5">
  //           <Divider style={{ background: "white", width: "auto" }} />
  //         </li>
  //         <li className="flex flex-col gap-3">
  //           <span>Profile</span>
  //           <div className="flex flex-row gap-3 items-center">
  //             <Image
  //               src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png"
  //               alt="profile"
  //               type="profile"
  //             />
  //             <div className="flex flex-col ">
  //               <span className="text-semibold text-base">
  //                 Hafidz Putra Herlyansyah
  //               </span>
  //               <span className="text-base">hafidzph@gmail.com</span>
  //             </div>
  //           </div>
  //         </li>
  //         <li>
  //           <Button
  //             onClick={handleLogout}
  //             sx={{
  //               marginTop: "20px",
  //               fontWeight: "600",
  //               fontSize: "20px",
  //               textTransform: "none",
  //             }}
  //             variant="contained"
  //             color="info"
  //             className="w-full h-12 flex gap-3 justify-center items-center"
  //           >
  //             <CiLogout size={26} />
  //             Log Out
  //           </Button>
  //         </li>
  //       </ThemeProvider>
  //     </ul>
  //   </div>
  // );
}

function CollapseButton({ styleNav, userRole }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Tentukan apakah collapse button harus ditampilkan berdasarkan peran pengguna
  const shouldShowCollapse = userRole === "user" || userRole === "admin";

  return (
    <>
      {shouldShowCollapse && (
        <Button
          onClick={toggleCollapse}
          color="info"
          sx={{
            paddingX: "1.7rem",
            paddingY: "0.55rem",
            fontSize: "1.150rem",
            letterSpacing: "1.2px",
            textTransform: "none",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "&:hover": {
              backgroundColor: "#047e8a",
            },
          }}
          className="w-full hover:bg-color-secondary"
        >
          <div className="flex justify-center items-center gap-4">
            <FaRegFolder size={24} />
            <span>Pengajuan</span>
          </div>
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </Button>
      )}
      <Collapse in={isOpen}>
        <div className="flex flex-row gap-3 h-fit ps-8 pe-5">
          <Divider
            style={{ background: "white", height: "auto" }}
            variant="middle"
            orientation="vertical"
          />
          <div className="w-full flex flex-col gap-4 mt-5">
            {shouldShowCollapse && userRole === "user" && (
              <>
                <NavLinkRoute style={styleNav} to="/berkas">
                  <span>Berkas</span>
                </NavLinkRoute>
                <NavLinkRoute style={styleNav} to="/berkas-selesai">
                  <span>Berkas Selesai</span>
                </NavLinkRoute>
              </>
            )}
            {shouldShowCollapse && userRole === "admin" && (
              <>
                <NavLinkRoute style={styleNav} to="/pengaju">
                  <span>Pengaju</span>
                </NavLinkRoute>
                <NavLinkRoute style={styleNav} to="/reviewer">
                  <span>Reviewer</span>
                </NavLinkRoute>
                <NavLinkRoute style={styleNav} to="/ketua">
                  <span>Ketua</span>
                </NavLinkRoute>
              </>
            )}
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default SideNav;
