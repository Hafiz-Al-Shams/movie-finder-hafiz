"use client";

import { useState } from "react";
import { isFavorite, toggleFavorite } from "@/lib/favorites";

export default function FavoriteButton({ movie }) {
  const [favorited, setFavorited] = useState(() =>
    typeof window !== "undefined" ? isFavorite(movie.id) : false
  );

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(movie);
    setFavorited((prev) => !prev);
  }

  return (
    <button
      onClick={handleClick}
      aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
      className={`flex items-center justify-center w-8 h-8 rounded-full text-lg transition-colors ${
        favorited
          ? "bg-red-500 text-white"
          : "bg-white/80 text-zinc-600 hover:bg-white"
      }`}
    >
      {favorited ? "♥" : "♡"}
    </button>
  );
}