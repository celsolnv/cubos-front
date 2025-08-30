import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";
import * as z from "zod";

import * as api from "@/api/req/user";
import * as f from "@/constants/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    email: f.email("E-mail"),
    name: f.string("Nome"),
    password: f.string("Senha"),
    confirmPassword: f.string("Confirmar senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // Indica qual campo tem o erro
  });

type IForm = z.infer<typeof schema>;
export const usePage = () => {
  const navigate = useNavigate();
  const hookForm = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: IForm) => {
    api.createUser(data).then(() => {
      navigate("/login");
    });
  };

  return {
    hookForm,
    onSubmit,
  };
};
