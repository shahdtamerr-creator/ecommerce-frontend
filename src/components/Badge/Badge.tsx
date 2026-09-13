import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type BadgeVariant = "primary" | "secondary" | "danger" | "neutral";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: "bg-[var(--color-primary)] text-white",
  secondary: "bg-[var(--color-secondary)] text-white",
  danger: "bg-[var(--color-danger)] text-white",
  neutral: "bg-gray-100 text-[var(--color-text-main)]",
};

export function Badge({
  children,
  variant = "neutral",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-sm)] px-2 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
