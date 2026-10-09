// /components/ui/Button.tsx
import { type ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-opacity-90 active:scale-95 focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2",
  secondary:
    "bg-transparent text-forest border-2 border-forest hover:bg-forest hover:text-cream active:scale-95 focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2",
  ghost:
    "bg-transparent text-forest hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-6 py-3 text-base min-h-[44px]",
  lg: "px-8 py-4 text-lg min-h-[52px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonAsButton>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold font-[var(--font-inter)] transition-all duration-200 cursor-pointer select-none",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonAsLink) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 select-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Link>
  );
}
