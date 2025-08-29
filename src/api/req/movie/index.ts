//Utils
import { handleReq } from "@/api/handle";
import type { IQuery } from "@/types/IPagination";
import { setMultiFormData } from "@/utils/submitForm/formData";

const url = "/movies";

export interface ICreate {
  name: string;
  originalName: string;
  tagline: string;
  language: string;
  director: string;
  releaseDate: string;
  budget: number;
  revenue: number;
  rating: number;
  durationMinutes: number;
  genres: string[];
  description?: string | null;
  bannerUrl?: string | null;
  popularity?: number | null;
  votes?: number | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IUpdate extends ICreate {}

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
    showSuccess: true,
    successMessage: "Filme atualizado com sucesso",
  });

export const destroy = async (id: string) =>
  handleReq({
    method: "delete",
    url: `${url}/${id}`,
  });
