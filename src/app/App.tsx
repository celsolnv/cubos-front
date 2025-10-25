import { BrowserRouter } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AppRouter } from "@/routes";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const client = new QueryClient();

  return (
    <>
      <Theme>
        <Sonner />
        <QueryClientProvider client={client}>
          <ThemeProvider>
            <AuthProvider>
              <BrowserRouter>
                <AppRouter />
              </BrowserRouter>
            </AuthProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </Theme>
    </>
  );
}
