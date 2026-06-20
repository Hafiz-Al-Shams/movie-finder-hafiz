// components/ErrorMessage.js
export default function ErrorMessage({ message }) {
  return (
    <p className="text-center text-red-500 py-16">
      Something went wrong: {message}
    </p>
  );
}