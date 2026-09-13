export default function ErrorState({ message }: { message: string }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center text-(--color-danger)">
      {message}
    </div>
  );
}
