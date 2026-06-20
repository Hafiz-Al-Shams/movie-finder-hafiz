import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function MovieCard({ movie }) {
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "—";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group flex flex-col rounded-lg overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow bg-white"
    >
      <div className="relative w-full aspect-[2/3] bg-zinc-100">
        {posterUrl ? (
          <Image
            src={posterUrl}
            alt={movie.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-zinc-400 text-sm">
            No image
          </div>
        )}

        <div className="absolute top-2 right-2">
          <FavoriteButton movie={movie} />
        </div>
      </div>

      <div className="p-3 flex flex-col gap-1">
        <h3 className="font-semibold text-sm line-clamp-2">{movie.title}</h3>
        <div className="flex justify-between text-xs text-zinc-500">
          <span>{year}</span>
          <span>⭐ {rating}</span>
        </div>
      </div>
    </Link>
  );
}