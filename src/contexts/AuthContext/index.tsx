import React, { createContext, useContext, useState } from "react";

import { toast } from "sonner";

import * as api from "@/api/req/auth";
import { setToken as setLocalStorageToken, getToken } from "@/hooks/token";

interface AuthContextType {
  token: string | null;
  login: (
    params: api.ILoginParams,
  ) => Promise<{ success: boolean; error: unknown }>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    return getToken() || null;
  });

  const login = async (params: api.ILoginParams) => {
    try {
      const response = await api.login(params);
      setToken(response.token);
      setLocalStorageToken(response.token);
      return { success: true, error: null };
    } catch (error) {
      toast.error("Erro ao fazer login");
      return { success: false, error };
    }
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
