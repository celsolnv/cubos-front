import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
  movieData: MovieData;
  onSave: (data: MovieData) => void;
}

export const MovieEditSidebar: React.FC<MovieEditSidebarProps> = ({
  isOpen,
  onClose,
  movieData,
  onSave,
}) => {
  const [posterPreview, setPosterPreview] = useState<string>("");
  const [backdropPreview, setBackdropPreview] = useState<string>("");

  const form = useForm<MovieData>({
    defaultValues: movieData,
  });

  const handleFileUpload = (file: File, type: "poster" | "backdrop") => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (type === "poster") {
        setPosterPreview(result);
        form.setValue("posterUrl", result);
      } else {
        setBackdropPreview(result);
        form.setValue("backdropUrl", result);
      }
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (data: MovieData) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};
