//Utils
import { handleReq } from "@/api/handle";
import type { IQuery } from "@/types/IPagination";
import { setMultiFormData } from "@/utils/submitForm/formData";

const url = "/movies";

export interface ICreate {
  name: string;
  originalName: string;
  tagline: string;
  description?: string | null;
  bannerUrl: string;
  language: string;
  director: string;
  releaseDate: string;
  budget: number;
  revenue: number;
  popularity: number;
  votes: number;
  duration: number;
  genres: string[];
}

export interface IUpdate extends ICreate {
  id: string;
}

export const list = async (query: IQuery) =>
  handleReq({
    method: "get",
    url,
    query,
  });

export const show = async (id: string) =>
  handleReq({
    method: "get",
    url: `${url}/${id}`,
  });

export const create = async (body: ICreate) =>
  handleReq({
    method: "post",
    url,
    body: setMultiFormData(body, "banner"),
    showSuccess: true,
    successMessage: "Filme criado com sucesso",
  });

export const update = async (body: IUpdate, id: string) =>
  handleReq({
    method: "put",
    url: `${url}/${id}`,
    body: setMultiFormData(body, "banner"),
  });

export const destroy = async (id: string) =>
  handleReq({
    method: "delete",
    url: `${url}/${id}`,
  });
