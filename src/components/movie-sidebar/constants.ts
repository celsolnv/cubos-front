import masks from "@/utils/masks";

export const mockData = {
  bannerUrl: "https://image.tmdb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  name: "Cavaleiro das trevas",
  originalName: "The Dark Knight",
  tagline: "Batman se une a um grupo de super-heróis para salvar o mundo.",
  genres: ["Ação", "Aventura", "Drama"],
  description: "Batman se une a um grupo de super-heróis para salvar o mundo.",
  language: "Inglês",
  director: "Anthony Russo, Joe Russo",
  releaseDate: "2025-08-29",
  budget: masks.money(185000000),
  revenue: masks.money(1004558444),
  popularity: 100000,
  votes: 10000,
  rating: 9.2,
  duration: 120,
  status: "lançado",
  cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
};
