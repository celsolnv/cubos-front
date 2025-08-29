/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from "react-router-dom";

import SelectTheme from "./SelectTheme";

import CubosLogoMin from "@/assets/icons/cubos-logo-min.svg?react";
import CubosLogo from "@/assets/icons/cubos-logo.svg?react";
import { Button } from "@/components/ui";
import { useAuth } from "@/contexts/AuthContext";
import { useSignOut } from "@/hooks/signout";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();
  const { token } = useAuth();
  const { out } = useSignOut();
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 w-full flex justify-between items-center bg-mauve-1 py-2 z-11 px-4 h-[72px]">
      <div
        className="flex items-center gap-4 hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        {isMobile ? <CubosLogoMin /> : <CubosLogo />}
        <span className="text-xl font-bold text-primary-foreground">
          Movies
        </span>
      </div>

      <div className="flex items-center gap-2">
        <SelectTheme />
        {token && (
          <Button variant="default" onClick={out}>
            Sair
          </Button>
        )}
      </div>
    </header>
  );
}
