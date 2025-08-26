import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { theme, setTheme, toggle, resolvedTheme } = useTheme();

  return (
    <>
      <div className="flex items-center gap-2">
        <button
          onClick={toggle}
          className="px-3 py-1 rounded border transition-colors duration-150"
          aria-label="Alternar tema"
        >
          {resolvedTheme === "dark" ? "🌙" : "☀️"}
        </button>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="border px-2 py-1 rounded"
        >
          <option value="system">Sistema</option>
          <option value="light">Claro</option>
          <option value="dark">Escuro</option>
        </select>
      </div>

      <div className="min-h-screen bg-purple-7 text-gray-900 dark:bg-purple-7 dark:text-white transition-colors duration-200">
        <h1 className="text-3xl">Meu App</h1>
        <p className="text-purple-5 dark:text-gray-300">Conteúdo...</p>
      </div>
    </>
  );
}

export default App;
