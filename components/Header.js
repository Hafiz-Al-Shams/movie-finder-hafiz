import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          🎬 Movie Finder
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/" className="hover:underline">
            Browse
          </Link>
          <Link href="/favorites" className="hover:underline">
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}