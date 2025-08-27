//Utils
import { handleReq } from "@/api/handle";
import type { IUser } from "@/types/IUser";

const url = "/auth";

export interface ILoginParams {
  email: string;
  password: string;
}
export interface ILoginResponse {
  token: string;
  user: IUser;
}

export const login = async (body: ILoginParams): Promise<ILoginResponse> =>
  handleReq({
    method: "post",
    url: `${url}/signin`,
    body,
    showSuccess: false,
    hideError: true,
    checkStatus: false,
  });
