// components/LoadingSpinner.js
export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-16">
      <p className="text-zinc-500 animate-pulse">Loading movies...</p>
    </div>
  );
}