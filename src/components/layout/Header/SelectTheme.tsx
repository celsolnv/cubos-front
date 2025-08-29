import { useState, useRef, useEffect } from "react";

import { useTheme } from "@/contexts/ThemeContext";
import Moon from "@/assets/icons/moon.svg";
import Sun from "@/assets/icons/sun.svg";


export default function SelectTheme() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const getThemeIcon = (themeType: "light" | "dark") => {
    return themeType === "light"
      ? Sun
      : Moon;
  };

  const getThemeLabel = (themeType: "light" | "dark") => {
    return themeType === "light" ? "Claro" : "Escuro";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        aria-label="Selecionar tema"
        aria-expanded={isOpen}
        aria-haspopup="true"
        type="button"
      >
        <img
          src={getThemeIcon(theme)}
          alt={`Tema ${theme}`}
          className="w-5 h-5 dark:invert"
        />
        <span className="hidden sm:inline text-sm font-medium">
          {getThemeLabel(theme)}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl z-50">
          <div className="py-1">
            {(["light", "dark"] as const).map((themeOption) => (
              <button
                key={themeOption}
                onClick={() => handleThemeChange(themeOption)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 ${
                  theme === themeOption
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200"
                }`}
                type="button"
              >
                <img
                  src={getThemeIcon(themeOption)}
                  alt={`Tema ${themeOption}`}
                  className="w-5 h-5 dark:invert"
                />
                <span className="font-medium">
                  {getThemeLabel(themeOption)}
                </span>
                {theme === themeOption && (
                  <svg
                    className="w-4 h-4 ml-auto text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
