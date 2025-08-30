import React, { useState } from "react";

import Close from "@/assets/icons/close.svg?react";
import { Badge, Button, Input, Label } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { availableGenres } from "@/constants/gender";
import type { IQuery } from "@/types/IPagination";

interface FilterModalProps {
  filters: IQuery;
  setFilters: (filters: IQuery) => void;
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  filters,
  setFilters,
  isOpen,
  onClose,
}) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [minDuration, setMinDuration] = useState([60]);
  const [maxDuration, setMaxDuration] = useState([200]);

  const applyFilters = () => {
    setFilters({
      ...filters,
      genres: selectedGenres,
      min_duration: minDuration[0],
      max_duration: maxDuration[0],
      initial_date: startDate,
      final_date: endDate,
    });
    onClose();
  };

  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const removeGenre = (genre: string) => {
    setSelectedGenres(selectedGenres.filter((g) => g !== genre));
  };

  const clearFilters = () => {
    setSelectedGenres([]);
    setStartDate("");
    setEndDate("");
    setMinDuration([30]);
    setMaxDuration([300]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto border-mauve-6 dark:bg-mauve-3 bg-mauve-6 dark:text-white text-mauve-12">
        <DialogHeader>
          <DialogTitle className="dark:text-white text-mauve-12">
            Filtros de Busca
          </DialogTitle>
          <DialogDescription className="dark:text-muted-foreground text-muted-foreground">
            Refine sua busca por filmes usando os filtros abaixo
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="rounded-lg p-4 bg-primary/5">
            <div className="mb-4">
              <h4 className="text-sm font-medium text-foreground mb-3">
                Duração ({minDuration[0]} - {maxDuration[0]} min)
              </h4>
              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="minDuration"
                    className="text-xs dark:text-muted-foreground "
                  >
                    Duração mínima
                  </label>
                  <Slider
                    value={minDuration}
                    onValueChange={setMinDuration}
                    min={30}
                    max={300}
                    step={5}
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="maxDuration"
                    className="text-xs text-muted-foreground"
                  >
                    Duração máxima
                  </label>
                  <Slider
                    value={maxDuration}
                    onValueChange={setMaxDuration}
                    min={30}
                    max={300}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 justify-between mt-10">
              <h2 className="py-2">Período de lançamento</h2>
              <div className="flex gap-2 justify-between">
                <div className="flex flex-col gap-2">
                  <Label>Data inicial</Label>
                  <Input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Data final</Label>
                  <Input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground mb-3">
              Gêneros
            </h4>

            {selectedGenres.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedGenres.map((genre) => (
                  <Badge
                    key={genre}
                    variant="secondary"
                    className="!cursor-pointer hover:scale-105 transition-all duration-75"
                    // className="bg-primary/20 text-primary hover:bg-primary/30 cursor-pointer"
                    onClick={() => removeGenre(genre)}
                  >
                    {genre}
                    <Close className="ml-1 h-3 w-3" />
                  </Badge>
                ))}
              </div>
            )}

            <div className="grid grid-cols-2 gap-2">
              {availableGenres.map((genre) => (
                <Button
                  key={genre}
                  onClick={() => toggleGenre(genre)}
                  className={`px-3 py-2 text-sm rounded-md border transition-colors dark:border-mauve-6 border-mauve-8 ${
                    selectedGenres.includes(genre)
                      ? "bg-primary dark:text-primary-foreground text-white "
                      : "bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={clearFilters}>
            Limpar Filtros
          </Button>
          <Button onClick={applyFilters}>Aplicar Filtros</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
