import { useContext } from "react"
import { AuthContext } from "../store/AuthContext"
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const RequireAuth = () => {
  const { authorized } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (authorized) {
    return (
      <Outlet />
    )
  }

  return <Navigate to="/login" state={{pathname}} replace/>

}
