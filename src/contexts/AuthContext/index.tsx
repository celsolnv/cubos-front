import React, { createContext, useContext, useState } from "react";

import { setToken as setLocalStorageToken, getToken } from "@/hooks/token";
interface AuthContextType {
  token: string | null;
  login: (jwt: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    return getToken() || null;
  });

  const login = (jwt: string) => {
    setToken(jwt);
    setLocalStorageToken(jwt);
  };

  const value: AuthContextType = {
    token,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
