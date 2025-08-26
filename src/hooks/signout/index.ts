export const useSignOut = () => {
  const out = async () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    localStorage.remove(import.meta.env.VITE_PUBLIC_TOKEN_LOCAL);
    cleanLocalStorage();
    window.location.href = "/login";
  };

  return { out };
};

export const cleanLocalStorage = () => {
  // Clean all cookies
  const cookies = localStorage.get();
  for (const cookie in cookies) {
    localStorage.remove(cookie);
  }
};
