import React, { useState } from "react";

interface MovieHeaderProps {
  title: string;
  originalTitle: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const MovieHeader: React.FC<MovieHeaderProps> = ({
  title,
  originalTitle,
  onEdit,
  onDelete,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      onDelete?.();
    }, 1000);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      setIsEditing(false);
      onEdit?.();
    }, 500);
  };

  return (
    <header className="z-0 flex min-h-[59px] w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
      <div className="self-stretch flex min-w-60 flex-col text-[rgba(238,238,240,1)] w-[264px] my-auto pr-[52px]">
        <h1 className="text-[32px] font-semibold">{title}</h1>
        <p className="text-base font-normal">
          Título original: {originalTitle}
        </p>
      </div>
      <div className="self-stretch flex items-center gap-4 text-base font-normal whitespace-nowrap text-center my-auto">
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="bg-[rgba(183,68,247,0.08)] self-stretch flex min-h-11 gap-3 overflow-hidden text-[#f1ddff] my-auto px-5 py-3 rounded-sm hover:bg-[rgba(183,68,247,0.15)] transition-colors disabled:opacity-50"
        >
          <div className="flex items-center gap-3 justify-center">
            <div className="self-stretch flex items-center gap-2.5 overflow-hidden justify-center my-auto">
              <span className="self-stretch my-auto">
                {isDeleting ? "Deletando..." : "Deletar"}
              </span>
            </div>
          </div>
        </button>
        <button
          onClick={handleEdit}
          disabled={isEditing}
          className="bg-[rgba(142,78,198,1)] self-stretch flex min-h-11 items-center overflow-hidden text-white justify-center my-auto px-5 py-3 rounded-sm hover:bg-[rgba(142,78,198,0.9)] transition-colors disabled:opacity-50"
        >
          <div className="self-stretch flex items-center justify-center my-auto">
            <div className="self-stretch flex items-center gap-2.5 overflow-hidden justify-center my-auto">
              <span className="self-stretch my-auto">
                {isEditing ? "Editando..." : "Editar"}
              </span>
            </div>
          </div>
        </button>
      </div>
    </header>
  );
};
