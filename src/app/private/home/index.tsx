import { MovieCard } from "./_components/movie-card";
import { movies } from "./constants";

import { Footer, Header } from "@/components/layout";
import { Button, Input } from "@/components/ui";

export default function Home() {
  const moviesCards = movies.slice(0, 6);
  return (
    <div>
      <Header />
      <div className="bg-[url('public/background.png')] relative  w-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40  to-black/90"></div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-4 mt-[72px]">
          <div className="w-full px-4 mt-4 ">
            <Input name="search" placeholder="Pesquise por filmes " />
          </div>
          <div className="flex w-full px-4">
            <Button className="grow-1" variant="soft">
              Filtros
            </Button>
            <Button className="grow-2">Adicionar Filme</Button>
          </div>

          <div className="bg-mauve-a-3 w-full grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-2 py-4 justify-items-center">
            {moviesCards.map((movie) => (
              <MovieCard
                key={movie.name}
                name={movie.name || ""}
                banner={movie.banner}
                gender={movie.genres[0]}
                rating={movie.rating}
              />
            ))}
          </div>
          <Footer isFixed={false} />
        </div>
      </div>
    </div>
  );
}
