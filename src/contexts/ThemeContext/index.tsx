// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";
type Context = {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (t: Theme) => void;
  toggle: () => void;
};

const ThemeContext = createContext<Context | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      return (localStorage.getItem("theme") as Theme) ?? "system";
    } catch {
      return "system";
    }
  });

  const getSystem = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const apply = (t: Theme) => {
    const resolved = t === "system" ? getSystem() : t;
    if (resolved === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    apply(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") apply("system");
    };
    mq.addEventListener
      ? mq.addEventListener("change", handler)
      : mq.addListener(handler);
    return () => {
      mq.removeEventListener
        ? mq.removeEventListener("change", handler)
        : mq.removeListener(handler);
    };
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);
  const toggle = () =>
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));

  const resolvedTheme = theme === "system" ? getSystem() : theme;

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
