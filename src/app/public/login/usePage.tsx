import { useForm } from "react-hook-form";

import * as z from "zod";

import * as f from "@/constants/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: f.email("E-mail"),
  password: f.string("Senha"),
});

type IForm = z.infer<typeof schema>;
export const usePage = () => {
  const hookForm = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: IForm) => {
    console.log(data);
  };
  return {
    hookForm,
    onSubmit,
  };
};
