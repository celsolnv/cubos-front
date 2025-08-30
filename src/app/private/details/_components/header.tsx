import React, { useState } from "react";

import { DeleteAlert } from "./delete-alert";

import { Button } from "@/components/ui";

interface MovieHeaderProps {
  title: string;
  originalTitle: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const MovieHeader: React.FC<MovieHeaderProps> = ({
  title,
  originalTitle,
  onEdit,
  onDelete,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
  };

  return (
    <header className="z-0 flex min-h-[59px] w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
      <div className="self-stretch flex min-w-60 flex-col text-mauve-4 w-[264px] my-auto pr-[52px]">
        <h1 className="text-[32px] font-semibold">{title}</h1>
        <p className="text-base font-normal">
          Título original: {originalTitle}
        </p>
      </div>
      <div className="self-stretch flex items-center gap-4 text-base font-normal whitespace-nowrap text-center my-auto">
        <Button
          onClick={handleDelete}
          disabled={isDeleting}
          variant={"soft"}
          className=" self-stretch flex min-h-11 gap-3 overflow-hidden my-auto px-5 py-3 rounded-sm transition-colors disabled:opacity-50"
        >
          {isDeleting ? "Deletando..." : "Deletar"}
        </Button>
        <Button
          onClick={onEdit}
          className=" self-stretch flex min-h-11 items-center overflow-hidden justify-center my-auto px-5 py-3 rounded-sm  transition-colors disabled:opacity-50"
        >
          Editar
        </Button>
      </div>
      <DeleteAlert
        open={isDeleting}
        setOpen={setIsDeleting}
        handleConfirm={onDelete}
      />
    </header>
  );
};
