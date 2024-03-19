import { NavLink } from "react-router-dom";

function NavLinkRoute({ children, style, to, onClick }) {
  return (
    <NavLink className={style} to={to} onClick={onClick}>
      {children}
    </NavLink>
  );
}

export default NavLinkRoute;
