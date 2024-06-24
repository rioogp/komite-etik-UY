import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import NavLinkRoute from "./NavLinkRoute";
import { useContext, useEffect, useState } from "react";
import {
  Button,
  ThemeProvider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  styled,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import { theme } from "../utils/theme";
import { AuthContext } from "../contexts/AuthContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import useTokenValidation from "../hooks/useTokenValidation";
import HandleLogout from "./HandleLogout";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#047e8a", // Warna hover item
  },
}));

function NavBar() {
  const { logout, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const style =
    "text-white hover:text-slate-200 w-fit transition duration-300 text-sm";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  useTokenValidation(token, logout);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <nav
        className={`flex items-center justify-between px-3 md:px-12 py-3 fixed w-full z-10 ${
          isScrolled
            ? "bg-color-secondary/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Logo style="flex" />
        <div className="flex  xl:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={handleToggleMenu}
          >
            <span className="text-white">
              <RxHamburgerMenu size={22} />
            </span>
          </button>
        </div>

        <Drawer
          anchor="top"
          open={isMenuOpen}
          onClose={handleToggleMenu}
          PaperProps={{
            sx: {
              backgroundColor: "#006A74",
              color: "white",
              position: "relative",
            },
          }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "8px 16px",
              }}
            >
              <Logo />
              <IconButton sx={{ color: "white" }} onClick={handleToggleMenu}>
                <IoMdClose size={24} />
              </IconButton>
            </ListItemIcon>
            <StyledListItem button onClick={handleToggleMenu}>
              <ListItemText
                primary="Dashboard"
                onClick={() => navigate("/home")}
              />
            </StyledListItem>
            <StyledListItem button onClick={handleToggleMenu}>
              <ListItemText
                primary="Peraturan & Pertanyaan"
                onClick={() => navigate("/peraturan-dan-pertanyaan")}
              />
            </StyledListItem>
            <StyledListItem button onClick={handleToggleMenu}>
              <ListItemText
                primary="Tugas & Fungsi"
                onClick={() => navigate("/peraturan-dan-pertanyaan")}
              />
            </StyledListItem>
            <StyledListItem button onClick={handleToggleMenu}>
              <ListItemText
                onClick={() => navigate("/ulasan")}
                primary="Ulasan"
              />
            </StyledListItem>
            <StyledListItem button onClick={handleToggleMenu}>
              <ListItemText
                onClick={() => navigate("/tentang")}
                primary="Tentang"
              />
            </StyledListItem>
            {token ? (
              <div className="flex gap-5 px-3">
                <Button
                  variant="outlined"
                  color="info"
                  sx={{
                    textTransform: "none",
                  }}
                  onClick={() => navigate("/update-profile")}
                  className="w-38 h-12"
                >
                  Update Profile
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    textTransform: "none",
                  }}
                  onClick={() => HandleLogout(logout)}
                  className="w-28 h-12"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex gap-5 px-4">
                <Button
                  variant="outlined"
                  color="info"
                  sx={{
                    textTransform: "none",
                  }}
                  onClick={() => navigate("/register")}
                  className="w-28 h-12"
                >
                  Sign Up
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    textTransform: "none",
                  }}
                  onClick={() => navigate("/login")}
                  className="w-28 h-12"
                >
                  Sign In
                </Button>
              </div>
            )}
          </List>
        </Drawer>

        <ul className="gap-5 hidden xl:flex">
          <li>
            <NavLinkRoute style={style} to="/home">
              Dashboard
            </NavLinkRoute>
          </li>
          <li>
            <NavLinkRoute style={style} to="/peraturan-dan-pertanyaan">
              Peraturan & Pertanyaan
            </NavLinkRoute>
          </li>
          <li>
            <NavLinkRoute style={style} to="/tugas-dan-fungsi">
              Tugas & Fungsi
            </NavLinkRoute>
          </li>
          <li>
            <NavLinkRoute style={style} to="/ulasan">
              Ulasan
            </NavLinkRoute>
          </li>
          <li>
            <NavLinkRoute style={style} to="/tentang">
              Tentang
            </NavLinkRoute>
          </li>
        </ul>
        <div className="hidden xl:flex gap-5">
          {token ? (
            <>
              <Button
                variant="outlined"
                color="info"
                sx={{
                  fontSize: "11.5px",
                  textTransform: "none",
                }}
                className="w-26 h-9"
                onClick={() => navigate("/update-profile")}
              >
                Update Profile
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{
                  fontSize: "11.5px",
                  textTransform: "none",
                }}
                onClick={() => HandleLogout(logout)}
                className="w-24 h-9"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                color="info"
                sx={{
                  fontSize: "11.5px",
                  textTransform: "none",
                }}
                onClick={() => navigate("/register")}
                className="w-24 h-9"
              >
                Sign Up
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{
                  fontSize: "11.5px",
                  textTransform: "none",
                }}
                onClick={() => navigate("/login")}
                className="w-24 h-9"
              >
                Sign In
              </Button>
            </>
          )}
        </div>
      </nav>
    </ThemeProvider>
  );
}

export default NavBar;
