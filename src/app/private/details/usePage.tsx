import { useState } from "react";
import { useParams } from "react-router-dom";

import moment from "moment";

import { useMovie } from "@/api/callers/movie";
import type { IMovie } from "@/types/IMovie";
import masks from "@/utils/masks";

export const usePage = () => {
  const { id } = useParams<{ id: string }>();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSaveMovie = (updatedData: typeof movieData) => {
    setMovieData(updatedData);
  };

  const [movieData, setMovieData] = useState<IMovie | null>(null);
  useMovie({
    enabled: false,
    show: !!id,
    id,
    callbacks: {
      show: {
        onSuccess: (movie: IMovie) => {
          // TODO: Adicionar mascara para duração e valores igual o figma
          const formatter = {
            ...movie,
            rating: movie.rating * 10,
            gain: masks.money(Number(movie.revenue) - Number(movie.budget)),
            revenue: masks.money(movie.revenue),
            budget: masks.money(movie.budget),
            releaseDate: moment(movie.releaseDate).format("DD/MM/YYYY"),
          };
          setMovieData(formatter);
        },
      },
    },
  });

  const handleEdit = () => {
    setIsSidebarOpen(true);
  };
  const handleDelete = () => {
    console.log("handleDelete");
  };

  return {
    movieData,
    isSidebarOpen,
    handleSaveMovie,
    setIsSidebarOpen,
    handleEdit,
    handleDelete,
  };
};
