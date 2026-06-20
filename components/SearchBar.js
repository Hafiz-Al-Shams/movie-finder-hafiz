"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({ initialQuery }) {
  const [value, setValue] = useState(initialQuery || "");
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      if (value) params.set("q", value);
      params.set("page", "1"); // always reset to page 1 on a new search
      router.push(`/?${params.toString()}`);
    }, 400); // wait 400ms after typing stops before navigating

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search movies by title..."
      className="w-full border border-zinc-300 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-zinc-400"
    />
  );
}