import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/themes.css";
import "./styles/global.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeContext/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
