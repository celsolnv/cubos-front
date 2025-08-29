//Utils
import { handleReq } from "@/api/handle";
import type { IQuery } from "@/types/IPagination";

const url = "/movies";

export interface ICreate {
  name: string;
  originalName: string;
  description: string;
  status: string;
  releaseDate: string;
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
    body,
  });

export const update = async (body: IUpdate, id: string) =>
  handleReq({
    method: "put",
    url: `${url}/${id}`,
    body,
  });

export const destroy = async (id: string) =>
  handleReq({
    method: "delete",
    url: `${url}/${id}`,
  });
