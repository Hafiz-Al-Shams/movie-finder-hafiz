const STORAGE_KEY = "movie-finder-favorites";

export function getFavorites() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isFavorite(id) {
  const favorites = getFavorites();
  return favorites.some((m) => m.id === id);
}

export function addFavorite(movie) {
  const favorites = getFavorites();
  if (favorites.some((m) => m.id === movie.id)) return favorites;

  const minimalMovie = {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
  };

  const updated = [...favorites, minimalMovie];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function removeFavorite(id) {
  const favorites = getFavorites();
  const updated = favorites.filter((m) => m.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function toggleFavorite(movie) {
  return isFavorite(movie.id) ? removeFavorite(movie.id) : addFavorite(movie);
}