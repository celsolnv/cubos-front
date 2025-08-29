import type { TFormData } from "./constants";

import type { IMovie } from "@/types/IMovie";
import masks from "@/utils/masks";

export function formatRequest(data?: IMovie): TFormData {
  if (!data) return {} as TFormData;
  return {
    ...data,
    tagline: data.description || "", // Map description to tagline
    language: data.language || "", // Map director to language temporarily
    rating: data.rating,
    budget: masks.money(data.budget),
    revenue: masks.money(data.revenue),
    popularity: data.popularity ? data.popularity * 1000 : undefined,
    votes: data.votes ? data.votes * 1000 : undefined,
  };
}

export function formatResponse(data: TFormData): IMovie {}
