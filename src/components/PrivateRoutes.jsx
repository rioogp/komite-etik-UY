import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function PrivateRoute({ element: Component, roles, ...rest }) {
  const { role } = useContext(AuthContext);

  const authorized = role && roles.includes(role);

  return (
    <Route
      {...rest}
      element={authorized ? <Component /> : <Navigate to="/" replace />}
    />
  );
}

export default PrivateRoute;
