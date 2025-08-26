/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          1: "var(--purple-1)",
          2: "var(--purple-2)",
          3: "var(--purple-3)",
          4: "var(--purple-4)",
          5: "var(--purple-5)",
          6: "var(--purple-6)",
          7: "var(--purple-7)",
          8: "var(--purple-8)",
          9: "var(--purple-9)",
          10: "var(--purple-10)",
          11: "var(--purple-11)",
          12: "var(--purple-12)",
        },

        "purple-a": {
          1: "var(--purple-a-1)",
          2: "var(--purple-a-2)",
          3: "var(--purple-a-3)",
          4: "var(--purple-a-4)",
          5: "var(--purple-a-5)",
          6: "var(--purple-a-6)",
          7: "var(--purple-a-7)",
          8: "var(--purple-a-8)",
          9: "var(--purple-a-9)",
          10: "var(--purple-a-10)",
          11: "var(--purple-a-11)",
          12: "var(--purple-a-12)",
        },
      },
    },
  },
  plugins: [],
};
