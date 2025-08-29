import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import Login from "./public/login";
import Register from "./public/register";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { getToken } from "@/hooks/token";
import { PrivateRoutes } from "@/routes/PrivateRoutes";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const PublicRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default function App() {
  const isAuthenticated = !!getToken();
  const client = new QueryClient();

  return (
    <>
      <Theme>
        <Sonner />
        <QueryClientProvider client={client}>
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
        </QueryClientProvider>
      </Theme>
    </>
  );
}
