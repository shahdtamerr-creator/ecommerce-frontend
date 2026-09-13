import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface EmptyStateProps {
  title: string;
  message: string;
  actionLabel?: string;
  actionLink?: string;
}

export default function EmptyState({
  title,
  message,
  actionLabel,
  actionLink,
}: EmptyStateProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-(--color-text-main) mb-4">
        {title}
      </h1>
      <p className="text-(--color-text-muted) mb-6">{message}</p>
      {actionLabel && actionLink && (
        <Link to={actionLink}>
          <Button variant="primary">{actionLabel}</Button>
        </Link>
      )}
    </div>
  );
}
