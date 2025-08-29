import React, { useState } from "react";

import ChevronLeft from "@/assets/icons/chevron-left.svg?react";
import ChevronRight from "@/assets/icons/chevron-right.svg?react";
import { Button } from "@/components/ui";
import type { IPaginationManager, IQuery } from "@/types/IPagination";

interface IPaginationProps {
  filters: IQuery;
  setPagination: (filters: IQuery) => void;
  paginationManager?: IPaginationManager;
}
export function Pagination({
  filters,
  setPagination,
  paginationManager,
}: IPaginationProps) {
  const [currentPage, setCurrentPage] = useState(
    paginationManager?.currentPage || 1,
  );

  const amountOfPages = (paginationManager?.lastPage || 1) - 1;
  const handlePageChange = (page: number) => {
    setPagination({
      ...filters,
      page: page,
    });
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    const newPage = (filters.page ?? 1) - 1;
    setPagination({
      ...filters,
      page: newPage,
    });
    setCurrentPage(newPage);
  };

  const handleNext = () => {
    const newPage = (filters.page ?? 1) + 1;
    setPagination({
      ...filters,
      page: newPage,
    });
    setCurrentPage(newPage);
  };

  return (
    <nav className="relative z-10 px-6 py-6" aria-label="Pagination">
      <div className="max-w-7xl mx-auto flex justify-center gap-2">
        <Button
          onClick={handlePrevious}
          variant="default"
          className="flex items-center justify-center w-11 h-11 rounded-sm transition-colors"
          aria-label="Previous page"
          disabled={filters.page === 1}
        >
          <ChevronLeft className="w-3 h-3 [&>path]:stroke-current" />
        </Button>

        <Button
          onClick={() => handlePageChange(1)}
          className={`flex items-center justify-center w-11 h-11 rounded-sm transition-colors ${
            currentPage === 1
              ? "bg-purple-9 text-white"
              : "bg-[rgba(235,234,248,0.08)] text-[#eae6fd] hover:bg-[rgba(235,234,248,0.12)]"
          }`}
        >
          1
        </Button>

        {Array.from({ length: amountOfPages }, (_, index) => index + 2).map(
          (page) => (
            <Button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`flex items-center justify-center w-11 h-11 rounded-sm transition-colors ${
                currentPage === page
                  ? "bg-purple-9 text-white"
                  : "bg-mauve-a-3 text-[#eae6fd] hover:brightness-110"
              }`}
            >
              {page}
            </Button>
          ),
        )}

        <Button
          onClick={handleNext}
          variant="default"
          className="flex items-center justify-center w-11 h-11 rounded-sm transition-colors"
          aria-label="Next page"
          disabled={filters.page === paginationManager?.lastPage}
        >
          <ChevronRight className="w-3 h-3 [&>path]:stroke-current" />
        </Button>
      </div>
    </nav>
  );
}

export default Pagination;
