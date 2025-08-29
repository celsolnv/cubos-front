import { useForm } from "react-hook-form";

export const useMovieSidebar = () => {
  const hookForm = useForm();

  return {
    hookForm,
  };
};
