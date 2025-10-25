import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";

import { getToken } from "@/hooks/token";

const AuthRoutes = lazy(() => import("@/app/public/auth/routes"));
const MoviesRoutes = lazy(() => import("@/app/private/movies/routes"));

export function AppRouter() {
  const isAuthenticated = !!getToken();

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/* Rotas privadas */}
      <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/movies/*" element={<MoviesRoutes />} />
      </Route>
    </Routes>
  );
}
