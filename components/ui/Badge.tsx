import { cn } from "@/lib/utils";

type BadgeVariant = "blue" | "violet" | "teal";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  blue: "text-blue-300 border-blue-500/30 bg-blue-500/10",
  violet: "text-violet-300 border-violet-500/30 bg-violet-500/10",
  teal: "text-teal-300 border-teal-500/30 bg-teal-500/10",
};

export function Badge({
  children,
  variant = "teal",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
