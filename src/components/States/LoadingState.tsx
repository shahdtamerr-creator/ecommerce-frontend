export default function LoadingState({
  message = "Loading...",
}: {
  message?: string;
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center text-(--color-text-muted)">
      {message}
    </div>
  );
}
