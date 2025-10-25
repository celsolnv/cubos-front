import { useLocation, Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = ({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) => {
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={`/auth/login?callbackUrl=${location.pathname}`} />
  );
};
