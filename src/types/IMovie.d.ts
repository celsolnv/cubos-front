export interface IMovie {
  id: string;
  name: string;
  originalName: string;
  description: string;
  status: string;
  releaseDate: string;
  budget: number | string;
  revenue: number | string;
  bannerUrl: string;
  genres: string[];
  director: string;
  durationMinutes: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
  bannerExpiresAt: string;
  bannerKey: string;

  popularity?: number;
  votes?: number;
  language?: string;
  // In front
  gain?: string;
}
