import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Login from "./public/login";
import Register from "./public/register";

import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { getToken } from "@/hooks/token";
import { PrivateRoutes } from "@/routes/PrivateRoutes";
import { Theme } from "@radix-ui/themes";

const PublicRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default function App() {
  const isAuthenticated = !!getToken();

  return (
    <>
      <Theme>
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
                <Route path="/*" element={<PrivateRoutes />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </ThemeProvider>
      </Theme>
    </>
  );
}
