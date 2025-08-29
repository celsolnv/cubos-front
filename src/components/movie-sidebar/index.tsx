/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { FormProvider } from "react-hook-form";

import { Upload } from "lucide-react";

import { InputDefault, TextareaDefault } from "../ds";
import { SelectDefault } from "../ds/form/select";
import { MultiSelect } from "../ds/form/select/multi";
import { availableGenres, statusOptions, type TFormData } from "./constants";
import { useMovieSidebar } from "./use";

import Close from "@/assets/icons/close.svg?react";
import { Button, Input, Label } from "@/components/ui";
import type { IMovie } from "@/types/IMovie";
import masks from "@/utils/masks";
interface MovieEditSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TFormData) => void;
  movie?: IMovie;
}

export const MovieSidebar: React.FC<MovieEditSidebarProps> = ({
  isOpen,
  onClose,
  onSave,
  movie,
}) => {
  const { hookForm, handleFileUpload, posterPreview } = useMovieSidebar({
    isOpen,
    movie,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="ml-auto w-96 lg:w-5/12 max-w-[500px] bg-sidebar  h-full overflow-y-auto relative z-10 bg-mauve-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex flex-col items-center justify-between mb-6">
            <div className="flex items-center justify-between w-full mb-6">
              <h2 className="text-xl font-semibold text-sidebar-foreground">
                Editar Filme
              </h2>
              <Button variant="ghost" onClick={onClose}>
                <Close className="[&_path]:stroke-current text-mauve-9" />
              </Button>
            </div>

            <FormProvider {...hookForm}>
              <form
                onSubmit={hookForm.handleSubmit(onSave)}
                className="space-y-4"
              >
                <InputDefault
                  label="Título"
                  name="name"
                  placeholder="Título do filme"
                />

                <InputDefault
                  label="Título Original"
                  name="originalName"
                  placeholder="Título Original do filme"
                />
                <InputDefault
                  label="Diretor"
                  name="director"
                  placeholder="Diretor(es) do filme"
                />
                <MultiSelect
                  label="Gêneros"
                  name="genres"
                  options={availableGenres}
                  value={hookForm.watch("genres")}
                  onChange={(value) => hookForm.setValue("genres", value)}
                />
                <InputDefault
                  label="Slogan"
                  name="tagline"
                  placeholder="Tagline do filme"
                />
                <TextareaDefault label="Sinopse" name="description" />
                <InputDefault
                  label="URL do poster "
                  required={false}
                  name="bannerUrl"
                  placeholder="Banner do filme"
                />
                {/* Poster Upload Section */}
                <div className="space-y-2">
                  <Label>Poster do Filme (Opcional)</Label>
                  <div className="flex gap-2">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(file, "poster");
                      }}
                      className="bg-sidebar-accent flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        document
                          .querySelector<HTMLInputElement>('input[type="file"]')
                          ?.click()
                      }
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                  {posterPreview && (
                    <img
                      src={posterPreview}
                      alt="Preview"
                      className="w-20 h-28 object-cover rounded border"
                    />
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InputDefault
                    label="Lançamento"
                    name="releaseDate"
                    type="date"
                  />
                  <InputDefault
                    label="Duração em minutos"
                    name="durationMinutes"
                    onlyNumbers
                  />
                  {/* <InputDefault label="Situação" name="status" /> */}
                  <SelectDefault
                    label="Situação"
                    name="status"
                    options={statusOptions}
                  />
                  <InputDefault label="Idioma" name="language" />
                  <InputDefault
                    label="Orçamento"
                    name="budget"
                    mask={masks.money}
                  />
                  <InputDefault
                    label="Receita"
                    name="revenue"
                    mask={masks.money}
                  />
                  <InputDefault
                    label="Popularidade"
                    name="popularity"
                    required={false}
                    onlyNumbers
                  />
                  <InputDefault
                    label="Votos"
                    name="votes"
                    onlyNumbers
                    required={false}
                  />
                  <InputDefault
                    label="Avaliação"
                    name="rating"
                    mask={masks.rating1To10}
                  />
                </div>

                <div className="flex gap-2 justify-end">
                  <Button type="reset" onClick={onClose} variant="soft">
                    Cancelar
                  </Button>
                  <Button type="submit">Adicionar filme</Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};
