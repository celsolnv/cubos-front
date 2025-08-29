/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { CircularRating } from "@/components/circular-rating";
import type { IMovie } from "@/types/IMovie";

interface IMovieCardProps extends IMovie {
  className?: string;
  onView: (id: string) => void;
}
export function MovieCard({
  id,
  bannerUrl,
  name,
  genres,
  rating,
  className,
  onView,
}: IMovieCardProps) {
  const hideClass =
    "opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-[#EEEEEE]";
  return (
    <article
      className={`relative group cursor-pointer overflow-hidden rounded-lg h-[281px] w-[183px] lg:w-[235px] lg:h-[355px]${className}`}
      onClick={() => onView(id)}
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
          <CircularRating rating={rating} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-center  ">
          <h3 className=" font-semibold mb-2 uppercase tracking-wide translate-y-15 group-hover:translate-y-0 transition-all duration-300 text-[#EEEEEE]">
            {name}
          </h3>
          <p className={hideClass}>{genres?.join(", ")}</p>
          <p className={hideClass}>{2012}</p>
        </div>
      </div>
    </article>
  );
}
