# Movie Finder — Movie Discovery App

## Live Project
🔗 [Movie Finder Live](https://movie-finder-hafiz.vercel.app/)

## Overview
Movie Finder is a movie discovery web app built with Next.js. It lets users browse popular movies, search by title with live results, view full details for any movie, and save favorites that persist across page reloads using localStorage. All movie data is fetched live from a free public API — no custom backend or database required.

## Data Source
This project uses the **[TMDB API](https://www.themoviedb.org/documentation/api)** (The Movie Database) for all movie data, including posters, titles, release dates, ratings, and overviews. A free TMDB account and API Read Access Token are required to run this project locally.

## Technologies Used
- **Framework:** Next.js 16.2.9
- **Styling:** Tailwind CSS
- **Data Fetching:** Native `fetch` API, Server Components
- **Persistence:** Browser `localStorage` (Favorites)
- **Data Source:** TMDB API

## Key Features

✅ **Browse Grid:** Responsive grid layout displaying movie poster, title, release year, and rating, adapting from 2 columns on mobile up to 6 columns on large screens.

✅ **Manual Pagination:** Browse and search results are paginated using Next/Previous buttons, showing exactly 12 results per page. No infinite scroll.

✅ **Live Search:** Users can search movies by title, with results updating automatically as they type (debounced to avoid excessive API calls).

✅ **Movie Details Page:** Clicking any movie card opens a dedicated details page showing the full overview, poster, release year, and rating.

✅ **Favorites with Persistence:** Users can add or remove movies from their favorites via a heart icon on each card or the details page. Favorites are stored in `localStorage` and persist across page reloads. A dedicated `/favorites` page lists all saved movies.

✅ **Loading & Error States:** A loading indicator displays while data is being fetched (via Next.js's `loading.js` convention), and clear messages are shown on fetch errors or when a search returns no results.

✅ **Footer Credit:** A footer on the home page displays the required project attribution text.

## Installation & Running Locally

Follow these steps to run the project locally:

1. **Clone the repository:**
```sh
   git clone https://github.com/Hafiz-Al-Shams/movie-finder-hafiz.git
   cd movie-finder-hafiz
```

2. **Install dependencies:**
```sh
   npm install
```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your TMDB API Read Access Token:

```sh
   TMDB_READ_ACCESS_TOKEN=YOUR_TMDB_READ_ACCESS_TOKEN
```

   You can get a free token by signing up at [themoviedb.org](https://www.themoviedb.org/) and generating an API Read Access Token under Settings → API.

4. **Start the development server:**
```sh
   npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Notes on Pagination Logic
TMDB's API returns 20 results per page by default. Since this project requires exactly 12 results per page, `lib/tmdb.js` includes a custom pagination layer that fetches and merges TMDB pages as needed, then slices out exactly 12 results per "app page" — ensuring consistent, predictable pagination regardless of TMDB's native page size.

## Additional Resources
- [TMDB API Documentation](https://developer.themoviedb.org/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

🚀 **Developed by Hafiz Al Shams**