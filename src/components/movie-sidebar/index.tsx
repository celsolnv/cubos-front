import React from "react";
import { FormProvider} from "react-hook-form";

import { InputDefault } from "../ds";
import { useMovieSidebar } from "./use";

import { Button } from "@/components/ui";

interface MovieData {
  title: string;
  originalTitle: string;
  tagline: string;
  synopsis: string;
  genres: string[];
  popularity: string;
  votes: string;
  releaseDate: string;
  duration: string;
  status: string;
  language: string;
  budget: string;
  revenue: string;
  profit: string;
  posterUrl: string;
  backdropUrl: string;
}

interface MovieEditSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  movieData?: MovieData;
  onSave: (data: MovieData) => void;
}

export const MovieSidebar: React.FC<MovieEditSidebarProps> = ({
  isOpen,
  onClose,
  movieData,
  onSave,
}) => {
  const { hookForm } = useMovieSidebar();

  const onSubmit = (data: any) => {
    onSave(data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Sidebar */}
      <div
        className="ml-auto w-96 bg-sidebar border-l border-sidebar-border h-full overflow-y-auto relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-sidebar-foreground">
              Editar Filme
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              {/* <X className="h-4 w-4" /> */}
            </Button>
            <FormProvider {...hookForm}>
              <form onSubmit={hookForm.handleSubmit(onSubmit)}>
                <InputDefault
                  label="Título"
                  name="title"
                  placeholder="Título do filme"
                />

                <InputDefault
                  label="Título Original"
                  name="originalTitle"
                  placeholder="Título Original do filme"
                />
                <InputDefault
                  label="Tagline"
                  name="tagline"
                  placeholder="Tagline do filme"
                />
                <InputDefault label="Sinopse" name="synopsis" />
                <InputDefault
                  label="URL do poster"
                  name="bannerUrl"
                  placeholder="Banner do filme"
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputDefault
                    label="Lançamento"
                    name="releaseDate"
                    type="date"
                  />
                  <InputDefault label="Duração em minutos" name="duration" />
                  <InputDefault label="Situação" name="status" />
                  <InputDefault label="Idioma" name="language" />
                </div>
                <InputDefault label="Orçamento" name="budget" />
                <InputDefault label="Receita" name="revenue" />
                <InputDefault label="Lucro" name="profit" />
                <InputDefault label="Popularidade" name="popularity" />
                <div></div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};
