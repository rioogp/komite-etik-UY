import { useNavigate } from "react-router-dom";
import Button from "./Button";
import LinkRoute from "./LinkRoute";
import Logo from "./Logo";
import OutlinedButton from "./OutlinedButton";
import NavLinkRoute from "./NavLinkRoute";

function NavBar() {
  const navigate = useNavigate();
  const style =
    "text-white hover:text-slate-200 w-fit transition duration-300 text-lg";

  return (
    <nav className="flex items-center justify-between px-12 py-5 bg-transparent absolute  w-full z-10">
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
      </ul>
      <div className="flex gap-5">
        <OutlinedButton onClick={() => navigate("/register")}>
          Sign Up
        </OutlinedButton>
        <Button onClick={() => navigate("/login")} type="primaryHome">
          Sign In
        </Button>
      </div>
    </nav>
  );
}

export default NavBar;
