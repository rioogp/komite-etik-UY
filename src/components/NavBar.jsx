import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import NavLinkRoute from "./NavLinkRoute";
import { useEffect, useState } from "react";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";

function NavBar() {
  const navigate = useNavigate();
  const style =
    "text-white hover:text-slate-200 w-fit transition duration-300 text-lg";
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <nav
      className={`flex items-center justify-between px-12 py-5 fixed w-full z-10 ${
        isScrolled ? "bg-color-secondary" : "bg-transparent"
      }`}
    >
      <Logo />
      <ul className="flex gap-5">
        <li>
          <NavLinkRoute style={style} to="/peraturan-dan-pertanyaan">
            Peraturan & Pertanyaan
          </NavLinkRoute>
        </li>
        <li>
          <NavLinkRoute style={style} to="/homepage">
            Contact
          </NavLinkRoute>
        </li>
        <li>
          <NavLinkRoute style={style} to="/ulasan">
            Ulasan
          </NavLinkRoute>
        </li>
      </ul>
      <div className="flex gap-5">
        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            color="info"
            onClick={() => navigate("/register")}
            className="w-28 h-12"
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/login")}
            className="w-28 h-12"
          >
            Sign In
          </Button>
        </ThemeProvider>
      </div>
    </nav>
  );
}

export default NavBar;
