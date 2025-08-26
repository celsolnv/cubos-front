import SelectTheme from "./SelectTheme";

import { Button } from "@/components/ui";
import { useAuth } from "@/contexts/AuthContext";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();
  const { token } = useAuth();

  return (
    <header className="fixed top-0 w-full flex justify-between items-center bg-mauve-1 py-2 z-11 px-4">
      <div className="flex items-center gap-4">
        {isMobile ? (
          <img src="public/icons/cubos-logo-min.svg" alt="Cubos Movies" />
        ) : (
          <img src="public/icons/cubos-logo.svg" alt="Cubos Movies" />
        )}
        <span className="text-xl font-bold text-primary-foreground">
          Movies
        </span>
      </div>

      <div className="flex items-center gap-2">
        <SelectTheme />
        {token && <Button variant="default">Sair</Button>}
      </div>
    </header>
  );
}
