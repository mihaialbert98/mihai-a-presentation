"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonAsAnchor extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  target?: never;
  rel?: never;
  onClick?: () => void;
}

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-500 hover:bg-blue-400 text-white border border-blue-400/50 shadow-glow-blue",
  ghost:
    "glass-card text-white hover:bg-white/10 border-white/20",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseClass = cn(
    "inline-flex items-center gap-2 rounded-xl font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const motionProps =
    shouldReduceMotion
      ? {}
      : {
          whileHover: { scale: 1.03 },
          whileTap: { scale: 0.98 },
          transition: { type: "spring" as const, stiffness: 400, damping: 17 },
        };

  if (href !== undefined) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={baseClass}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={baseClass}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
