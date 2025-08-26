import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";

import Home from "./private/home";
import Login from "./public/login";
import Register from "./public/register";

import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { getToken } from "@/hooks/token";

const PublicRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

const PrivateRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={`/login?callbackUrl=${location.pathname}`} />
  );
};

export default function App() {
  const isAuthenticated = !!getToken();

  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route
                element={<PublicRoute isAuthenticated={isAuthenticated} />}
              >
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
              </Route>
              <Route
                element={<PrivateRoute isAuthenticated={isAuthenticated} />}
              >
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
