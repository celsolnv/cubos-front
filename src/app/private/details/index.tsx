import { CardMovieDetailsInfo } from "./_components/card-movie-details-info";
import { MovieHeader } from "./_components/header";
import { usePage } from "./usePage";

import { CircularRating } from "@/components/circular-rating";
import { Footer, Header } from "@/components/layout";
import { MovieSidebar } from "@/components/movie-sidebar";

import "@/styles/movie.css";

export default function MovieDetails() {
  const {
    movieData,
    isSidebarOpen,
    setIsSidebarOpen,
    handleEdit,
    handleDelete,
    show,
    handleSave,
  } = usePage();

  if (!movieData) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Header />
      <main className="relative overflow-hidden p-8 max-md:px-5 min-h-screen bg-gray-900 mt-[72px]">
        <div className="absolute inset-0 z-0">
          <img
            src={movieData.bannerUrl}
            alt="Movie backdrop"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10">
          <MovieHeader
            title={movieData.name}
            originalTitle={movieData.originalName}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

          <div className="flex gap-6 mt-8 max-md:flex-col">
            <img
              src={movieData.bannerUrl}
              alt={`${movieData.name} movie poster`}
              className={`aspect-[0.69] object-contain w-[374px] rounded shadow-[0px_1px_5px_rgba(0,0,0,0.2)] min-w-60 `}
            />

            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <div className="text-white text-lg italic">
                  Todo heroi tem seu começo
                </div>
                <div className="flex items-center gap-4">
                  <CardMovieDetailsInfo
                    title="Popularidade"
                    value={movieData.popularity}
                  />
                  <CardMovieDetailsInfo title="Votos" value={movieData.votes} />
                  <CircularRating rating={movieData.rating} />
                </div>
              </div>

              <div className="flex gap-6 flex-col md:flex-row">
                <section className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%]">
                  <article className="card-movie-details-info rounded  w-full text-base p-4">
                    <h3 className="bg-blend-normal text-mauve-11 font-bold uppercase">
                      Sinopse
                    </h3>
                    <p className="text-[rgba(238,238,240,1)] font-normal mt-2">
                      {movieData.description}
                    </p>
                  </article>
                  <div className="card-movie-details-info rounded bg-mauve-4 mt-4 p-4">
                    <h3 className="bg-blend-normal text-mauve-11 text-sm font-bold">
                      Gêneros
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {movieData.genres.map((genre, index) => (
                        <div className="gender-tag" key={index}>
                          {genre}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <CardMovieDetailsInfo
                      title="Lançamento"
                      value={movieData.releaseDate}
                    />
                    <CardMovieDetailsInfo
                      title="Duração"
                      value={`${movieData.durationMinutes} minutos`}
                    />
                    <CardMovieDetailsInfo
                      title="Situação"
                      value={movieData.status}
                    />
                    <CardMovieDetailsInfo
                      title="Diretor"
                      value={movieData.director}
                    />
                    <CardMovieDetailsInfo
                      title="Idioma"
                      value={movieData.language}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <CardMovieDetailsInfo
                      title="Orçamento"
                      value={movieData.budget?.toLocaleString() || "N/A"}
                    />
                    <CardMovieDetailsInfo
                      title="Receita"
                      value={movieData.revenue?.toLocaleString() || "N/A"}
                    />
                    <CardMovieDetailsInfo
                      title="Lucro"
                      value={movieData.gain}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MovieSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onSave={handleSave}
          movie={show?.data}
        />
      </main>
      <Footer />
    </>
  );
}
