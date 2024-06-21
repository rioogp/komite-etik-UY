import { useEffect, useRef, useState } from "react";
import { Drawer, IconButton, List, useMediaQuery } from "@mui/material";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../Logo";
import SideNav from "./SideNav";
import Heading from "../Heading";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const isSmallScreen = useMediaQuery("(max-width: 1199px)");

  const handleItemClick = () => {
    if (isSmallScreen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const nav = navRef.current;
    const initialPosition = nav.offsetTop;
    const initialLeft = nav.offsetLeft;
    const initialHeight = nav.offsetHeight;
    const offset = 20; // Jarak (offset) yang diinginkan antara navigasi dan konten di bawahnya (dalam px)

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= initialPosition) {
        nav.style.position = "fixed";
        nav.style.top = 0;
        nav.style.left = initialLeft + "px";
        nav.style.width = nav.offsetWidth + "px";
        nav.style.zIndex = 50;

        const mainContent = document.querySelector("main");
        if (mainContent) {
          mainContent.style.paddingTop = `${initialHeight + offset}px`;
        }
      } else {
        nav.style.position = "static";
        nav.style.left = "auto";
        nav.style.width = "100%";

        const mainContent = document.querySelector("main");
        if (mainContent) {
          mainContent.style.paddingTop = "0";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <>
      <div
        ref={navRef}
        className="flex justify-between items-center lg:hidden w-full bg-color-primary/90 text-white px-5 py-2"
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <FiMenu />
        </IconButton>
        <Heading type="homeTitle">K-Etik Web</Heading>
      </div>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 330,
            backgroundColor: "#006A74",
          },
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            height: "100dvh",
            padding: 2,
          }}
        >
          <div className="flex justify-between items-center w-full">
            <Logo />
            <IconButton sx={{ color: "white" }} onClick={toggleDrawer(false)}>
              <FiX />
            </IconButton>
          </div>

          <SideNav onItemClick={handleItemClick} />
        </List>
      </Drawer>

      <aside className="bg-color-primary hidden lg:flex flex-col gap-6 h-dvh px-6 pt-5">
        <Logo />
        <SideNav />
      </aside>
    </>
  );
}

export default SideBar;
