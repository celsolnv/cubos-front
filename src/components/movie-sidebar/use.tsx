import { useState } from "react";
import { useForm } from "react-hook-form";

import { mockData } from "./constants";
import { movieSchema } from "./schema";

import { zodResolver } from "@hookform/resolvers/zod";

export const useMovieSidebar = () => {
  const hookForm = useForm({
    resolver: zodResolver(movieSchema),
    defaultValues: mockData,
  });
  const [posterPreview, setPosterPreview] = useState<string>("");

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
