import { Link } from "react-router-dom";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button, Input, Label } from "@/components/ui";

export default function Login() {
  return (
    <>
      <Header />
      <div className="bg-[url('public/background.png')] relative h-screen w-screen bg-cover bg-center ">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40  to-black/90"></div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          <div className="bg-mauve-3 w-[80%] max-w-[412px] p-4 rounded-lg flex flex-col items-center justify-center gap-4">
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label className="text-sm font-bold" htmlFor="email">
                Nome/E-mail
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Digite seu nome ou e-mail"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label className="text-sm font-bold" htmlFor="password">
                Senha
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Digite sua senha"
              />
            </div>
            <div className="flex justify-between gap-2 w-full items-center">
              <Link to="/forgot-password">
                <span className="text-primary underline ">
                  Esqueci minha senha
                </span>
              </Link>
              <Button className="min-h-[44px]" variant="default">
                Entrar
              </Button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
