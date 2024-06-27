import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { CiCalendarDate, CiLogout } from "react-icons/ci";
import { FaRegFolder } from "react-icons/fa6";
import { PiSquaresFour } from "react-icons/pi";

import Image from "../Image";
import NavLinkRoute from "../NavLinkRoute";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../utils/theme";
import { Button, CircularProgress, Collapse, Divider } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../features/authentication/useUser";
import { useUnreadNotifications } from "../../features/notifications/useUnreadNotifications";
import { useMarkAsRead } from "../../features/notifications/useMarkAsRead";
import { IoDocumentTextOutline } from "react-icons/io5";
import HandleLogout from "../HandleLogout";

function SideNav({ onItemClick }) {
  const { logout, role } = useContext(AuthContext);
  const { user, isLoading } = useUser();

  const { isLoading: isLoadingUnread, unreadNotifications } =
    useUnreadNotifications();
  const { markAsRead } = useMarkAsRead();

  const navigate = useNavigate();
  const isNotificationPage = location.pathname === "/notifikasi";

  const styleNav = ({ isActive, isNotificationPage }) =>
    isActive || isNotificationPage
      ? "flex items-center gap-3 font-semibold text-sm py-3 px-6 transition-colors duration-300 bg-white text-black rounded-md"
      : "flex items-center gap-3 font-semibold text-sm py-3 px-6 transition-colors duration-300 hover:text-white hover:bg-color-secondary rounded-md";

  const handleNotificationClick = (e) => {
    e.preventDefault();
    markAsRead();
    navigate("/notifikasi");
    onItemClick();
  };

  const roleMenus = {
    user: [
      <CollapseButton
        styleNav={styleNav}
        userRole={role}
        onItemClick={onItemClick}
      />,

      <NavLinkRoute
        style={styleNav({ isNotificationPage })}
        onClick={handleNotificationClick}
      >
        <IoIosNotificationsOutline size={22} />
        <span>Notifikasi</span>
        <div className="flex justify-end items-end w-5/12">
          {isLoadingUnread ? (
            <CircularProgress size={16} />
          ) : unreadNotifications === 0 ? (
            ""
          ) : (
            <NotificationBadge unreadNotifications={unreadNotifications} />
          )}
        </div>
      </NavLinkRoute>,
    ],
    admin: [
      <NavLinkRoute style={styleNav} to="/admin/members" onClick={onItemClick}>
        <IoDocumentTextOutline size={22} />
        <span>Data Anggota</span>
      </NavLinkRoute>,
      <CollapseButton styleNav={styleNav} userRole={role} />,
      <NavLinkRoute
        style={styleNav({ isNotificationPage })}
        onClick={handleNotificationClick}
      >
        <IoIosNotificationsOutline size={22} />
        <span>Notifikasi</span>
        <div className="flex justify-end items-end w-5/12">
          {isLoadingUnread ? (
            <CircularProgress size={16} />
          ) : unreadNotifications === 0 ? (
            ""
          ) : (
            <NotificationBadge unreadNotifications={unreadNotifications} />
          )}
        </div>
      </NavLinkRoute>,
      <NavLinkRoute style={styleNav} to="/rapat" onClick={onItemClick}>
        <CiCalendarDate size={22} />
        <span>Jadwal Pertemuan</span>
      </NavLinkRoute>,
    ],
    reviewer: [
      <NavLinkRoute
        style={styleNav}
        to="/reviewer/berkas"
        onClick={onItemClick}
      >
        <FaRegFolder size={22} />
        <span>Berkas</span>
      </NavLinkRoute>,
      <NavLinkRoute
        style={styleNav({ isNotificationPage })}
        onClick={handleNotificationClick}
      >
        <IoIosNotificationsOutline size={22} />
        <span>Notifikasi</span>
        <div className="flex justify-end items-end w-5/12">
          {isLoadingUnread ? (
            <CircularProgress size={16} />
          ) : unreadNotifications === 0 ? (
            ""
          ) : (
            <NotificationBadge unreadNotifications={unreadNotifications} />
          )}
        </div>
      </NavLinkRoute>,
      <NavLinkRoute style={styleNav} to="/rapat" onClick={onItemClick}>
        <CiCalendarDate size={22} />
        <span>Jadwal Pertemuan</span>
      </NavLinkRoute>,
    ],
    ketua: [
      <NavLinkRoute
        style={styleNav({ isNotificationPage })}
        onClick={handleNotificationClick}
      >
        <IoIosNotificationsOutline size={22} />
        <span>Notifikasi</span>
        <div className="flex justify-end items-end w-5/12">
          {isLoadingUnread ? (
            <CircularProgress size={16} />
          ) : unreadNotifications === 0 ? (
            ""
          ) : (
            <NotificationBadge unreadNotifications={unreadNotifications} />
          )}
        </div>
      </NavLinkRoute>,
      <NavLinkRoute style={styleNav} to="/rapat" onClick={onItemClick}>
        <CiCalendarDate size={22} />
        <span>Jadwal Pertemuan</span>
      </NavLinkRoute>,
    ],
  };

  return (
    <div className="font-medium overflow-auto text-neutral-100 text-sm flex flex-col gap-5 tracking-[1px]">
      <span>Menu</span>
      <ul className="p-1 flex flex-col gap-3">
        <ThemeProvider theme={theme}>
          <NavLinkRoute style={styleNav} to="/home" onClick={onItemClick}>
            <PiSquaresFour size={22} />
            <span>Home</span>
          </NavLinkRoute>
          {roleMenus[role].map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
          <li className="my-5">
            <Divider style={{ background: "white", width: "auto" }} />
          </li>
          <li className="flex flex-col gap-3">
            <span className="text-sm">Profil</span>
            <div
              className="flex flex-row gap-3 items-center cursor-pointer"
              onClick={() => navigate("/update-profile")}
            >
              <Image
                src={user?.user.photo ? user.user.photo : "/default.png"}
                alt="profile"
                type="profile"
              />
              <div className="flex flex-col ">
                <span className="text-semibold text-xs">
                  {isLoading ? "" : user.user.name}
                </span>
                <span className="text-xs">
                  {isLoading ? "" : user.user.email}
                </span>
              </div>
            </div>
          </li>
          <li>
            <Button
              onClick={() => HandleLogout(logout)}
              sx={{
                marginTop: "20px",
                fontWeight: "600",
                fontSize: "12px",
                textTransform: "none",
              }}
              variant="contained"
              color="info"
              className="w-full h-9 flex gap-2 justify-center items-center"
            >
              <CiLogout size={18} />
              Keluar
            </Button>
          </li>
        </ThemeProvider>
      </ul>
    </div>
  );
}

function NotificationBadge({ unreadNotifications }) {
  return (
    <span className="bg-white text-black w-9 h-7 rounded-lg text-xs flex justify-center items-center">
      {unreadNotifications}
    </span>
  );
}

function CollapseButton({ styleNav, userRole, onItemClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const shouldShowCollapse = userRole === "user" || userRole === "admin";

  return (
    <>
      {shouldShowCollapse && (
        <Button
          onClick={toggleCollapse}
          color="info"
          sx={{
            paddingX: "1.6rem",
            paddingY: "0.55rem",
            fontSize: "0.85rem",
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
            <FaRegFolder size={18} />
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
                <NavLinkRoute
                  style={styleNav}
                  to="/berkas"
                  onClick={onItemClick}
                >
                  <span>Berkas</span>
                </NavLinkRoute>
                <NavLinkRoute
                  style={styleNav}
                  to="/berkas-selesai"
                  onClick={onItemClick}
                >
                  <span>Berkas Selesai</span>
                </NavLinkRoute>
              </>
            )}
            {shouldShowCollapse && userRole === "admin" && (
              <>
                <NavLinkRoute
                  style={styleNav}
                  to="/admin/berkas/pengaju"
                  onClick={onItemClick}
                >
                  <span>Pengaju</span>
                </NavLinkRoute>
                <NavLinkRoute
                  style={styleNav}
                  to="/admin/berkas/reviewer"
                  onClick={onItemClick}
                >
                  <span>Reviewer</span>
                </NavLinkRoute>
                <NavLinkRoute
                  style={styleNav}
                  to="/admin/berkas/konfirmasi-berkas"
                  onClick={onItemClick}
                >
                  <span>Konfirmasi Berkas</span>
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
