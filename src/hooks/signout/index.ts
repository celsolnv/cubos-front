import Cookies from "js-cookie";

export const useSignOut = () => {
  const out = async () => {
    Cookies.remove(import.meta.env.VITE_PUBLIC_TOKEN_LOCAL);
    // cleanCookies();
    window.location.href = "/login";
  };

  return { out };
};

export const cleanCookies = () => {
  // Clean all cookies
  const cookies = Cookies.get();
  for (const cookie in cookies) {
    Cookies.remove(cookie);
  }
};
