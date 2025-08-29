interface ICardMovieDetailsInfoProps {
  title: string;
  value?: string | number;
}
export function CardMovieDetailsInfo({
  title,
  value,
}: ICardMovieDetailsInfoProps) {
  return (
    <div className="card-movie-details-info">
      <div className="text-gray-400 text-xs uppercase font-bold">{title}</div>
      <div className="text-white text-sm font-semibold mt-1">
        {value || "-"}
      </div>
    </div>
  );
}
