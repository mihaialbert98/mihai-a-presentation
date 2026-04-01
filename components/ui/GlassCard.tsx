"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section" | "li";
}

export function GlassCard({
  children,
  className,
  hover = false,
  as: Tag = "div",
}: GlassCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseClass = cn("glass-card p-6", className);

  if (hover && !shouldReduceMotion) {
    return (
      <motion.div
        className={baseClass}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    );
  }

  return <Tag className={baseClass}>{children}</Tag>;
}
