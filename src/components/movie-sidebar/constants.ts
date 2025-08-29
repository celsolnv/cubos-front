import { z } from "zod";

import * as f from "@/constants/schemas";

export const movieSchema = z.object({
  name: f.string("Título"),
  originalName: f.string("Título Original"),
  tagline: f.string("Tagline"),
  description: f.text("Sinopse"),
  bannerUrl: f.text("Banner").optional().nullable(),
  language: f.string("Idioma"),
  director: f.string("Diretor"),
  releaseDate: f.dateFutureAllowed,
  budget: f.numberTransform("Orçamento"),
  revenue: f.numberTransform("Receita"),
  popularity: f.numberTransform("Popularidade").optional().nullable(),
  votes: f.number("Votos").optional().nullable(),
  rating: f.numberTransformWithDecimal("Avaliação"),
  durationMinutes: f.numberTransform("Duração em minutos"),
  genres: z.array(z.string()).transform((val) => val.map((v) => v.trim())),
  file: z.any().optional().nullable(),
});

export type TFormData = z.infer<typeof movieSchema>;

export const statusOptions = [
  { label: "Lançado", value: "lançado" },
  { label: "Em produção", value: "em produção" },
  { label: "Pós-produção", value: "pós-produção" },
  { label: "Pré-produção", value: "pré-produção" },
  { label: "Cancelado", value: "cancelado" },
  { label: "Em espera", value: "em espera" },
];

export const availableGenres = [
  "Ação",
  "Aventura",
  "Animação",
  "Comédia",
  "Crime",
  "Documentário",
  "Drama",
  "Família",
  "Fantasia",
  "História",
  "Horror",
  "Música",
  "Mistério",
  "Romance",
  "Ficção Científica",
  "Thriller",
  "Guerra",
  "Faroeste",
];
