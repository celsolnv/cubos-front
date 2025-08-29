export interface IMovie {
  id: string;
  name: string;
  originalName: string;
  description: string;
  status: string;
  releaseDate: string;
  budget: number;
  revenue: number;
  bannerUrl: string;
  genres: string[];
  director: string;
  durationMinutes: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
  bannerExpiresAt: string;
  bannerKey: string;
}
