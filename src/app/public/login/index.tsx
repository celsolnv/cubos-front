import { FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

import { usePage } from "./usePage";

import { InputDefault } from "@/components/ds";
import { Footer, Header } from "@/components/layout";
import { Button, Text } from "@/components/ui";

export default function Login() {
  const { hookForm, onSubmit } = usePage();
  return (
    <>
      <Header />
      <div className="bg-[url('/static/background.png')] relative h-screen w-screen bg-cover bg-center ">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40  to-black/90"></div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          <div className="bg-mauve-3 w-[80%] max-w-[412px] p-4 rounded-lg ">
            <FormProvider {...hookForm}>
              <form
                className="w-full flex flex-col items-center justify-center gap-4"
                onSubmit={hookForm.handleSubmit(onSubmit)}
              >
                <InputDefault
                  name="email"
                  label="Nome/E-mail"
                  placeholder="Digite seu nome ou e-mail"
                />
                <InputDefault
                  name="password"
                  label="Senha"
                  type="password"
                  placeholder="Digite sua senha"
                />

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
              </form>
            </FormProvider>

            <div className="mt-8 w-full text-center leading-1">
              <Text className="text-sm" as="span">
                Não tem uma conta?{" "}
                <Link to="/cadastro" className="underline">
                  Cadastre-se
                </Link>
              </Text>
            </div>
          </div>

          <Footer isFixed />
        </div>
      </div>
    </>
  );
}
