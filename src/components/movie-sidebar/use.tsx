import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { movieSchema } from "./constants";
import { formatRequest } from "./utils";

import type { IMovie } from "@/types/IMovie";
import { zodResolver } from "@hookform/resolvers/zod";

export const useMovieSidebar = ({
  isOpen,
  movie,
}: {
  isOpen: boolean;
  movie?: IMovie;
}) => {
  const hookForm = useForm({
    resolver: zodResolver(movieSchema),
    defaultValues: formatRequest(movie),
  });
  const [posterPreview, setPosterPreview] = useState<string>("");

  useEffect(() => {
    hookForm.reset();
  }, [hookForm, isOpen]);

  const handleFileUpload = (file: File, type: "poster" | "backdrop") => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (type === "poster") {
        setPosterPreview(result);
        hookForm.setValue("bannerUrl", result);
      }
    };
    reader.readAsDataURL(file);
  };

  return {
    hookForm,
    handleFileUpload,
    posterPreview,
  };
};
