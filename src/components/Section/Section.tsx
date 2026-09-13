import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { Container } from "../Container/Container";

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Section({
  children,
  title,
  subtitle,
  className,
}: SectionProps) {
  return (
    <section className={cn("py-[var(--spacing-xl)]", className)}>
      <Container>
        {title && (
          <div className="mb-[var(--spacing-md)]">
            <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-[var(--color-text-muted)] mt-1">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
