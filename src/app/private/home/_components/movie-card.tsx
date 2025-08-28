interface IMovieCardProps {
  banner: string;
  name: string;
  gender: string;
  rating: number;
}
export function MovieCard(movie: IMovieCardProps) {
  return (
    <div
      style={{ backgroundImage: `url(${movie.banner})` }}
      className="bg-cover bg-center relative h-[281px] w-[183px] lg:w-[235px] lg:h-[355px] rounded-lg"
    >
      {/* Linear gradient overlay */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background:
            "linear-gradient(180deg, rgba(204, 204, 204, 0.0001) 0%, rgba(0, 0, 0, 0.633084) 50%, #000000 100%)",
        }}
      />

      <div className="absolute bottom-0 w-full text-center z-10 p-4">
        <span className="text-sm font-bold">{movie.name.toUpperCase()}</span>
      </div>
    </div>
  );
}
