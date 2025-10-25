import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import { toast } from "sonner";
import * as z from "zod";

import { CustomError } from "@/api/handle";
import * as f from "@/constants/schemas";
import { useAuth } from "@/contexts/AuthContext";
import { useManagerForm } from "@/logic/form";
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
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = useAuth();

  const setLoading = useManagerForm().setIsLoading;

  const onSubmit = (data: IForm) => {
    setLoading(true);
    login(data)
      .then(({ success, error }) => {
        if (success) {
          const callback = searchParams.get("callbackUrl");
          navigate(callback || "/");
          return;
        }
        if (error instanceof CustomError) {
          const data = error.data as { message: string; status: number };
          if (data.status === 401 || data.status === 429) {
            hookForm.setError("password", {
              type: "manual",
              message: data.message,
            });
          }
        }
      })
      .catch((err) => {
        toast.error("Um erro inesperado ocorreu");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    hookForm,
    onSubmit,
  };
};
