export default function MovieDetails() {
  const movieData = {
    title: "Bumblebee",
    originalTitle: "Bumblebee",
    tagline: "Todo herói tem um começo.",
    synopsis:
      '"Bumblebee" é um filme que se passa em 1987 e conta a história de um Autobot chamado Bumblebee que encontra refúgio em um ferro-velho de uma pequena cidade praiana da Califórnia. Charlie, uma adolescente prestes a completar 18 anos, encontra Bumblebee machucado e sem condições de uso. Quando ela o revive, percebe que este não é qualquer fusca amarelo1. O filme é uma mistura de animação e drama, com um tom leve e divertido, e se destaca por sua ambientação nos anos 80 e pela trilha sonora perfeita2.',
    genres: ["Ação", "Aventura", "Ficção científica"],
    popularity: "42.595",
    votes: "5704",
    releaseDate: "12/20/2018",
    duration: "1h 53m",
    status: "Lançado",
    language: "Inglês",
    budget: "$135M",
    revenue: "$467.99M",
    profit: "$332.99M",
    posterUrl:
      "https://api.builder.io/api/v1/image/assets/aff716cbe72e4b2ea9377e220d5a9405/f86b509c42017a530e132fc955595befd8cd98d3?placeholderIfAbsent=true",
    backdropUrl:
      "https://api.builder.io/api/v1/image/assets/aff716cbe72e4b2ea9377e220d5a9405/730ec13d280999a606374365517960357a840fd4?placeholderIfAbsent=true",
  };

  const handleEdit = () => {
    console.log("Edit movie clicked");
  };

  const handleDelete = () => {
    console.log("Delete movie clicked");
  };

  return (
    <main className="relative overflow-hidden p-8 max-md:px-5 min-h-screen bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img
          src={movieData.backdropUrl}
          alt="Movie backdrop"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10">
        {/* <MovieHeader
          title={movieData.title}
          originalTitle={movieData.originalTitle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        /> */}

        <div className="flex gap-6 mt-8 max-md:flex-col">
          <img
            src={movieData.posterUrl}
            alt={`${movieData.title} movie poster`}
            className={`aspect-[0.69] object-contain w-[374px] rounded shadow-[0px_1px_5px_rgba(0,0,0,0.2)] min-w-60 `}
          />

          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-start justify-between">
              <div className="text-white text-lg italic">
                {movieData.tagline}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-gray-400 text-xs uppercase font-bold">
                      Popularidade
                    </div>
                    <div className="text-white text-sm font-semibold">
                      {movieData.popularity}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-xs uppercase font-bold">
                      Votos
                    </div>
                    <div className="text-white text-sm font-semibold">
                      {movieData.votes}
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <div className="relative w-20 h-20">
                    <svg
                      className="w-20 h-20 transform -rotate-90"
                      viewBox="0 0 80 80"
                    >
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="4"
                        fill="transparent"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="#FFD700"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray="151.58 226.19"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">67%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <section className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%]">
                <article className="rounded bg-[rgba(35,34,37,0.6)] w-full text-base p-4">
                  <h3 className="bg-blend-normal text-[rgba(181,178,188,1)] font-bold uppercase">
                    Sinopse
                  </h3>
                  <p className="text-[rgba(238,238,240,1)] font-normal mt-2">
                    {movieData.synopsis}
                  </p>
                </article>
                <div className="rounded bg-[rgba(35,34,37,0.6)] mt-4 p-4">
                  <h3 className="bg-blend-normal text-[rgba(181,178,188,1)] text-sm font-bold">
                    Generos
                  </h3>
                  <div className="flex gap-2 mt-2">
                    {movieData.genres.map((genre, index) => (
                      <div key={index}>{genre}</div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-800/60 p-3 rounded">
                    <div className="text-gray-400 text-xs uppercase font-bold">
                      Lançamento
                    </div>
                    <div className="text-white text-sm font-semibold mt-1">
                      {movieData.releaseDate}
                    </div>
                  </div>
                  <div className="bg-gray-800/60 p-3 rounded">
                    <div className="text-gray-400 text-xs uppercase font-bold">
                      Duração
                    </div>
                    <div className="text-white text-sm font-semibold mt-1">
                      {movieData.duration}
                    </div>
                  </div>
                  <div className="bg-gray-800/60 p-3 rounded">
                    <div className="text-gray-400 text-xs uppercase font-bold">
                      Situação
                    </div>
                    <div className="text-white text-sm font-semibold mt-1">
                      {movieData.status}
                    </div>
                  </div>
                  <div className="bg-gray-800/60 p-3 rounded">
                    <div className="text-gray-400 text-xs uppercase font-bold">
                      Idioma
                    </div>
                    <div className="text-white text-sm font-semibold mt-1">
                      {movieData.language}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-800/60 p-3 rounded">
                    <div className="text-gray-400 text-xs uppercase font-bold">
                      Orçamento
                    </div>
                    <div className="text-white text-sm font-semibold mt-1">
                      {movieData.budget}
                    </div>
                  </div>
                  <div className="bg-gray-800/60 p-3 rounded">
                    <div className="text-gray-400 text-xs uppercase font-bold">
                      Receita
                    </div>
                    <div className="text-white text-sm font-semibold mt-1">
                      {movieData.revenue}
                    </div>
                  </div>
                  <div className="bg-gray-800/60 p-3 rounded">
                    <div className="text-gray-400 text-xs uppercase font-bold">
                      Lucro
                    </div>
                    <div className="text-white text-sm font-semibold mt-1">
                      {movieData.profit}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
