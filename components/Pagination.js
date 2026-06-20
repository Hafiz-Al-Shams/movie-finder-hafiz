import Link from "next/link";

export default function Pagination({ currentPage, totalPages, query }) {
  const buildHref = (page) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    params.set("page", String(page));
    return `/?${params.toString()}`;
  };

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <Link
        href={hasPrev ? buildHref(currentPage - 1) : "#"}
        className={`px-4 py-2 rounded-md border text-sm ${
          hasPrev ? "hover:bg-zinc-100" : "opacity-40 pointer-events-none"
        }`}
      >
        Previous
      </Link>
      <span className="text-sm text-zinc-600">
        Page {currentPage} of {totalPages}
      </span>
      <Link
        href={hasNext ? buildHref(currentPage + 1) : "#"}
        className={`px-4 py-2 rounded-md border text-sm ${
          hasNext ? "hover:bg-zinc-100" : "opacity-40 pointer-events-none"
        }`}
      >
        Next
      </Link>
    </div>
  );
}