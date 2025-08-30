import FilterModal from "./_components/filter-modal";
import { MovieCard } from "./_components/movie-card";
import { usePage } from "./usePage";

import { Footer, Header } from "@/components/layout";
import Pagination from "@/components/layout/Pagination";
import { MovieSidebar } from "@/components/movie-sidebar";
import { Button, Input } from "@/components/ui";
export default function Home() {
  const {
    data,
    handleSearch,
    handleView,
    handleCreate,
    isSidebarOpen,
    setIsSidebarOpen,
    pagination,
    setFilters,
    filters,
    isFilterModalOpen,
    setIsFilterModalOpen,
  } = usePage();

  return (
    <div>
      <Header />
      <div className="bg-[url('/static/background.png')] relative  w-screen bg-cover bg-center overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40  to-black/90"></div>

        <div className="relative z-10 h-[calc(100vh - 72px)] flex flex-col items-center justify-center gap-4 mt-[72px]">
          <div className="w-full flex justify-end">
            <div className="mt-4 w-full flex flex-col gap-4 lg:flex-row lg:w-fit items-end justify-items-end">
              <div className="w-full px-4 flex items-center justify-center">
                <Input
                  name="search"
                  placeholder="Pesquise por filmes "
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-[480px]"
                />
              </div>
              <div className="flex w-full px-4 gap-2">
                <Button
                  className="grow-1"
                  variant="soft"
                  onClick={() => setIsFilterModalOpen(true)}
                >
                  Filtros
                </Button>

                <Button
                  onClick={() => setIsSidebarOpen(true)}
                  className="grow-2"
                >
                  Adicionar Filme
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-mauve-a-3 w-full gap-4 py-4 flex flex-wrap justify-center ">
            {data?.map((movie) => (
              <MovieCard key={movie.id} {...movie} onView={handleView} />
            ))}
            {data.length === 0 && (
              <div className="flex flex-col items-center justify-center h-screen">
                <p className="text-mauve-11">Nenhum filme encontrado</p>
              </div>
            )}
          </div>
          <Pagination
            filters={filters}
            setPagination={(items) =>
              setFilters((prev) => ({ ...prev, ...items }))
            }
            paginationManager={pagination}
          />
        </div>
      </div>
      <Footer />
      <FilterModal
        filters={filters}
        setFilters={setFilters}
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      />
      <MovieSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onSave={handleCreate}
      />
    </div>
  );
}
