import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-[var(--color-text-main)]"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "rounded-[var(--radius-md)] border border-gray-300 px-3 py-2 text-sm",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]",
            error && "border-[var(--color-danger)]",
            className,
          )}
          {...props}
        />
        {error && (
          <span className="text-xs text-[var(--color-danger)]">{error}</span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
