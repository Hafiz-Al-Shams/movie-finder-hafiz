"use client";

import { useState } from "react";
import MovieGrid from "@/components/MovieGrid";
import { getFavorites } from "@/lib/favorites";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(() =>
    typeof window !== "undefined" ? getFavorites() : []
  );

  return (
    <div className="p-6 max-w-6xl mx-auto w-full">
      <h1 className="text-2xl font-bold mb-6">Your Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-zinc-500 py-10">
          You have not added any favorites yet. Browse movies and tap the heart icon to save them here.
        </p>
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </div>
  );
}