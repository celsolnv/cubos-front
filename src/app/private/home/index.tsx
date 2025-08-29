import { useState } from "react";

import { MovieCard } from "./_components/movie-card";
import { usePage } from "./usePage";

import { Footer, Header } from "@/components/layout";
import { MovieSidebar } from "@/components/movie-sidebar";
import { Button, Input } from "@/components/ui";
export default function Home() {
  const { data, handleSearch, handleView } = usePage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onSave = (data: unknown) => {
    console.log("onSave", data);
  };
  return (
    <div>
      <Header />
      <div className="bg-[url('public/background.png')] relative  w-screen bg-cover bg-center overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40  to-black/90"></div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-4 mt-[72px]">
          <div className="w-full px-4 mt-4 ">
            <Input
              name="search"
              placeholder="Pesquise por filmes "
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <div className="flex w-full px-4">
            <Button className="grow-1" variant="soft">
              Filtros
            </Button>
            <Button className="grow-2">Adicionar Filme</Button>
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
          <Footer isFixed />
        </div>
      </div>
      <MovieSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onSave={onSave}
      />
    </div>
  );
}
