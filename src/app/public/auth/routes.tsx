import { Route, Routes } from "react-router-dom";

import Login from "./login";
import Register from "./register";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}

export default AuthRoutes;
