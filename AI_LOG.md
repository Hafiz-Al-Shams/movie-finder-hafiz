## Tools Used
- **Claude (Anthropic)** — used as the primary AI assistant throughout the project for planning the file structure, generating component/page code, debugging React/Next.js errors, and writing project documentation (README.md, this file).
- **VS Code** — code editor used to create, edit, and test all project files.
- **TMDB API documentation** — referenced directly (not AI-generated) to confirm correct endpoint names and response shapes before asking the AI to write fetch logic around them.

## Best Prompts

1. **"Build a Movie Discovery App in Next.js... [pasted full project requirement, including R1–R4]"**
   This worked well because I pasted the *entire* requirement document up front, including the firm/non-negotiable rules (R1–R4), instead of describing the project in my own words. This meant every piece of generated code respected constraints like "exactly 12 results per page" and "manual pagination, not infinite scroll" from the very first response, rather than me catching violations later.

2. **"now i need clear folder structure for this full project... how many new files in what file structure do i need to create and how should i approach this now?"**
   Asking for the full file structure and build order *before* writing any code prevented scope confusion later. It meant every phase after this had a fixed target to build toward.

3. **"error=Error: Calling setState synchronously within an effect... on app>favorites>page.js on this line= setFavorites(getFavorites());"**
   Pasting the exact error message, the exact file, and the exact line of code — rather than a vague "it's not working" — let the AI diagnose the real cause immediately instead of guessing, which mattered a lot for a React-specific warning like this one.

## What I Fixed Manually
While building the Favorites feature, the AI's first version of `FavoriteButton.js` and `app/favorites/page.js` used a `useEffect` that called `setState` synchronously just to copy a value into state on mount (e.g. `setFavorited(isFavorite(movie.id))` inside `useEffect`). React flagged this with a warning: *"Calling setState synchronously within an effect can trigger cascading renders."*

The AI's attempted fix (computing the value directly via `useState(() => typeof window !== "undefined" ? getFavorites() : [])`) removed the warning.