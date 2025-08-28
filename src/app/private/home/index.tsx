import { MovieCard } from "./_components/movie-card";
import { movies } from "./constants";

import { Footer, Header } from "@/components/layout";

export default function Home() {
  const moviesCards = movies.slice(0, 6);
  return (
    <div>
      <Header />
      <div className="bg-[url('public/background.png')] relative h-screen w-screen bg-cover bg-center ">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40  to-black/90"></div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center mt-[72px] mb-[72px] ">
          <div className="bg-mauve-a-3 w-full h-full rounded-lg grid grid-cols-2 gap-4 mt-10">
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
        </div>
      </div>

      <Footer />
    </div>
  );
}
