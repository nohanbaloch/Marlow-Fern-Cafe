// /components/ui/Section.tsx
import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  bg?: "cream" | "sand" | "forest";
}

export function Section({
  as: Tag = "section",
  bg = "cream",
  className,
  children,
  ...props
}: SectionProps) {
  const bgClass = {
    cream: "bg-cream",
    sand: "bg-sand",
    forest: "bg-forest text-cream",
  }[bg];

  return (
    <Tag
      className={cn("py-16 md:py-24", bgClass, className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
