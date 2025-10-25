import { Route, Routes } from "react-router-dom";

import Details from "./details";
import List from "./list";

export function MoviesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default MoviesRoutes;
