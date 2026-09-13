import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-(--color-primary) text-white hover:bg-(--color-primary-hover)",
  secondary:
    "bg-(--color-secondary) text-(--color-text-main) hover:bg-gray-200",
  danger: "bg-(--color-danger-light) text-(--color-danger) hover:bg-red-100",
  outline: "border border-gray-300 text-(--color-text-main) hover:bg-gray-50",
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-lg transition font-medium ${
        variantStyles[variant]
      } ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
