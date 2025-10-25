import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import moment from "moment";

import { useMovie } from "@/api/callers/movie";
import type { TFormData } from "@/components/movie-sidebar/constants";
import type { IMovie } from "@/types/IMovie";
import masks from "@/utils/masks";

export const usePage = () => {
  const { id } = useParams<{ id: string }>();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState<IMovie | null>(null);
  const navigate = useNavigate();

  const handleSaveMovie = (updatedData: typeof movieData) => {
    setMovieData(updatedData);
  };

  const [movieData, setMovieData] = useState<IMovie | null>(null);
  const { show, update, destroy, list } = useMovie({
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
          setData(movie);
        },
      },
      update: {
        onSuccess: () => {
          show.refetch();
          setIsSidebarOpen(false);
        },
      },
      destroy: {
        onSuccess: () => {
          navigate("/");
        },
      },
    },
  });

  const handleEdit = () => {
    setIsSidebarOpen(true);
  };

  const handleSave = (data: TFormData) => {
    update.mutate(data);
  };

  const handleDelete = () => {
    destroy.mutate(id!);
  };

  return {
    movieData,
    isSidebarOpen,
    handleSaveMovie,
    setIsSidebarOpen,
    handleEdit,
    handleDelete,
    show,
    handleSave,
    data,
  };
};
