import { Link } from "react-router-dom";

function LinkRoute({ children, type, to }) {
  const base =
    "text-color-primary hover:text-color-secondary w-fit transition duration-200";

  const styles = {
    primary: base + " font-medium",
    secondary: base + " font-semibold text-md",
    footer:
      "font-base text-black text-lg hover:text-slate-700 transition duration-200",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <a
      href="http://yarsi.ac.id"
      rel="noopener noreferrer"
      className={styles[type]}
      target="_blank"
    >
      {children}
    </a>
  );
}

export default LinkRoute;
