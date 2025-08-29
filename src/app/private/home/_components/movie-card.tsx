import type { IMovie } from "@/types/IMovie";

interface IMovieCardProps extends IMovie {
  className?: string;
}
export function MovieCard({
  bannerUrl,
  name,
  genres,
  rating,
  className,
}: IMovieCardProps) {
  const hideClass =
    "opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0";
  return (
    <article
      className={`relative group cursor-pointer overflow-hidden rounded-lg h-[281px] w-[183px] lg:w-[235px] lg:h-[355px]${className}`}
    >
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background:
            "linear-gradient(180deg, rgba(204, 204, 204, 0.0001) 0%, rgba(0, 0, 0, 0.633084) 50%, #000000 100%)",
        }}
      />
      <div className="aspect-[0.66] overflow-hidden rounded-lg shadow-lg">
        <img
          src={bannerUrl}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          alt={name}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="3"
                strokeDasharray={`${rating}, 100`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-sm font-bold">{rating}%</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-center  ">
          <h3 className=" text-base font-semibold mb-2 uppercase tracking-wide translate-y-15 group-hover:translate-y-0 transition-all duration-300">
            {name}
          </h3>
          <p className={hideClass}>{genres?.join(", ")}</p>
          <p className={hideClass}>{2012}</p>
        </div>
      </div>
    </article>
  );
}
