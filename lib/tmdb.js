const BASE_URL = "https://api.themoviedb.org/3";

function getHeaders() {
  return {
    Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
    accept: "application/json",
  };
}

// Browse: popular movies, paginated
export async function getPopularMovies(page = 1) {
  const res = await fetch(`${BASE_URL}/movie/popular?page=${page}`, {
    headers: getHeaders(),
  });

  if (!res.ok) {
    throw new Error(`TMDB fetch failed: ${res.status}`);
  }

  return res.json(); // { page, results: [...], total_pages, total_results }
}

// Search by title, paginated
export async function searchMovies(query, page = 1) {
  const res = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}`,
    { headers: getHeaders() }
  );

  if (!res.ok) {
    throw new Error(`TMDB search failed: ${res.status}`);
  }

  return res.json();
}

// Get single movie details by id
export async function getMovieDetails(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}`, {
    headers: getHeaders(),
  });

  if (!res.ok) {
    throw new Error(`TMDB details fetch failed: ${res.status}`);
  }

  return res.json();
}

const PAGE_SIZE = 12;
const TMDB_PAGE_SIZE = 20;

async function getPaginated(fetchPageFn, page) {
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const firstTmdbPage = Math.floor(startIndex / TMDB_PAGE_SIZE) + 1;
  const lastTmdbPage = Math.floor((endIndex - 1) / TMDB_PAGE_SIZE) + 1;

  let allResults = [];
  let totalResults = 0;

  for (let p = firstTmdbPage; p <= lastTmdbPage; p++) {
    const data = await fetchPageFn(p);
    allResults = allResults.concat(data.results);
    totalResults = data.total_results;
  }

  const offset = startIndex % TMDB_PAGE_SIZE;
  const results = allResults.slice(offset, offset + PAGE_SIZE);
  const totalPages = Math.max(1, Math.ceil(totalResults / PAGE_SIZE));

  return { results, totalPages, totalResults, page };
}

export async function getPopularMoviesPage(page = 1) {
  return getPaginated((p) => getPopularMovies(p), page);
}

export async function searchMoviesPage(query, page = 1) {
  return getPaginated((p) => searchMovies(query, p), page);
}