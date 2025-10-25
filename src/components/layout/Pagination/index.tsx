import { useEffect } from "react";

import ChevronLeft from "@/assets/icons/chevron-left.svg?react";
import ChevronRight from "@/assets/icons/chevron-right.svg?react";
import { Button } from "@/components/ui";
import type { IPaginationManager, IQuery } from "@/types/IPagination";

interface IPaginationProps {
  filters: IQuery;
  setPagination: (filters: IQuery) => void;
  paginationManager?: IPaginationManager;
  maxVisiblePages?: number; // Máximo de páginas visíveis
}

export function Pagination({
  filters,
  setPagination,
  paginationManager,
  maxVisiblePages = 5,
}: IPaginationProps) {
  const currentPage = filters.page || 1;
  const totalPages = paginationManager?.lastPage || 1;
  const hasNextPage = paginationManager?.nextPage !== null;
  const hasPrevPage = currentPage > 1;

  // Sincroniza estado local com props
  useEffect(() => {
    if (paginationManager?.currentPage) {
      setPagination({
        ...filters,
        page: paginationManager.currentPage,
      });
    }
  }, [paginationManager?.currentPage, filters, setPagination]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setPagination({
      ...filters,
      page,
    });
  };

  const handlePrevious = () => {
    if (hasPrevPage) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (hasNextPage) {
      handlePageChange(currentPage + 1);
    }
  };

  // Gera array de páginas visíveis com lógica de truncamento
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    if (totalPages <= maxVisiblePages) {
      // Se total de páginas é menor que o máximo, mostra todas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Lógica de truncamento
      const startPage = Math.max(1, currentPage - halfVisible);
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      // Ajusta o início se estiver muito próximo do final
      const adjustedStart = Math.max(1, endPage - maxVisiblePages + 1);

      // Adiciona primeira página
      if (adjustedStart > 1) {
        pages.push(1);
        if (adjustedStart > 2) {
          pages.push("...");
        }
      }

      // Adiciona páginas do meio
      for (let i = adjustedStart; i <= endPage; i++) {
        pages.push(i);
      }

      // Adiciona última página
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  if (totalPages <= 1) {
    return null; // Não renderiza se há apenas 1 página
  }

  return (
    <nav
      className="relative z-10 px-6 py-6"
      aria-label="Paginação"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-center gap-2">
        {/* Botão Anterior */}
        <Button
          onClick={handlePrevious}
          variant="outline"
          className="flex items-center justify-center w-11 h-11 rounded-sm transition-colors"
          aria-label="Página anterior"
          disabled={!hasPrevPage}
        >
          <ChevronLeft className="w-3 h-3 [&>path]:stroke-current" />
        </Button>

        {/* Botões de páginas */}
        {visiblePages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex items-center justify-center w-11 h-11 text-[#eae6fd]"
                aria-hidden="true"
              >
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isActive = currentPage === pageNumber;

          return (
            <Button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              variant={isActive ? "default" : "outline"}
              className={`flex items-center justify-center w-11 h-11 rounded-sm transition-colors ${
                isActive
                  ? "bg-purple-9 text-white"
                  : "bg-[rgba(235,234,248,0.08)] text-[#eae6fd] hover:bg-[rgba(235,234,248,0.12)]"
              }`}
              aria-label={`Página ${pageNumber}`}
              aria-current={isActive ? "page" : undefined}
            >
              {pageNumber}
            </Button>
          );
        })}

        {/* Botão Próximo */}
        <Button
          onClick={handleNext}
          variant="outline"
          className="flex items-center justify-center w-11 h-11 rounded-sm transition-colors"
          aria-label="Próxima página"
          disabled={!hasNextPage}
        >
          <ChevronRight className="w-3 h-3 [&>path]:stroke-current" />
        </Button>
      </div>

      {/* Informações da paginação para screen readers */}
      <div className="sr-only" aria-live="polite">
        Página {currentPage} de {totalPages}
      </div>
    </nav>
  );
}

export default Pagination;
