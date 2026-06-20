import { getPopularMoviesPage, searchMoviesPage } from "@/lib/tmdb";
import MovieGrid from "@/components/MovieGrid";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import ErrorMessage from "@/components/ErrorMessage";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const query = params?.q || "";
  const page = Number(params?.page) || 1;

  let data = null;
  let error = null;

  try {
    data = query
      ? await searchMoviesPage(query, page)
      : await getPopularMoviesPage(page);
  } catch (e) {
    error = e.message;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto w-full">
      <h1 className="text-2xl font-bold mb-4">
        {query ? `Results for "${query}"` : "Popular Movies"}
      </h1>

      <SearchBar initialQuery={query} />

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <MovieGrid movies={data.results} />
          <Pagination
            currentPage={page}
            totalPages={data.totalPages}
            query={query}
          />
        </>
      )}
    </div>
  );
}