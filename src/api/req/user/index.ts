//Utils
import { handleReq } from "@/api/handle";
import type { IUser } from "@/types/IUser";

const url = "/users";

interface ICreateUserParams {
  name: string;
  email: string;
  password: string;
}

export const createUser = async (body: ICreateUserParams): Promise<IUser> =>
  handleReq({
    method: "post",
    url,
    body,
    showSuccess: true,
    hideError: false,
    successMessage: "Usuário criado com sucesso",
  });
