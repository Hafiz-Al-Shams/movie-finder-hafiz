import { getMovieDetails } from "@/lib/tmdb";
import FavoriteButton from "@/components/FavoriteButton";
import Image from "next/image";
import Link from "next/link";

export default async function MovieDetails({ params }) {
  const { id } = await params;
  let movie = null;
  let error = null;

  try {
    movie = await getMovieDetails(id);
  } catch (e) {
    error = e.message;
  }

  if (error) {
    return (
      <p className="p-10 text-red-500 text-center">
        Could not load movie: {error}
      </p>
    );
  }

  const year = movie.release_date ? movie.release_date.slice(0, 4) : "—";
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <div className="p-6 max-w-4xl mx-auto w-full">
      <Link href="/" className="text-sm text-zinc-500 hover:underline">
        ← Back
      </Link>

      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <div className="relative w-full md:w-64 aspect-[2/3] flex-shrink-0 bg-zinc-100 rounded-lg overflow-hidden">
          {posterUrl ? (
            <Image
              src={posterUrl}
              alt={movie.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-zinc-400">
              No image
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <FavoriteButton movie={movie} />
          </div>

          <p className="text-zinc-500 mt-1">
            {year} • ⭐ {movie.vote_average?.toFixed(1) ?? "N/A"}
          </p>

          <p className="mt-4 text-zinc-700 leading-relaxed">
            {movie.overview || "No overview available."}
          </p>
        </div>
      </div>
    </div>
  );
}