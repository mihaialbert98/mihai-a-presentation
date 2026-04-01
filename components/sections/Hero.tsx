"use client";

import { useEffect, useReducer, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import type { Translations } from "@/lib/i18n/translations";

type Props = { t: Translations["hero"] };

type Phase = "typing" | "holding" | "erasing";
interface TWState { text: string; titleIdx: number; phase: Phase; count: number; }
type TWAction =
  | { type: "APPEND"; char: string }
  | { type: "ERASE" }
  | { type: "SET_PHASE"; phase: Phase }
  | { type: "NEXT" };

function twReducer(s: TWState, a: TWAction): TWState {
  switch (a.type) {
    case "APPEND":    return { ...s, text: s.text + a.char };
    case "ERASE":     return { ...s, text: s.text.slice(0, -1) };
    case "SET_PHASE": return { ...s, phase: a.phase };
    case "NEXT":      return { ...s, text: "", titleIdx: (s.titleIdx + 1) % s.count, phase: "typing" };
  }
}

function useTypewriter(titles: readonly string[]) {
  const reduced = useReducedMotion();
  const [s, dispatch] = useReducer(twReducer, {
    text: reduced ? (titles[0] ?? "") : "",
    titleIdx: 0,
    phase: "typing" as Phase,
    count: titles.length,
  });
  const current = titles[s.titleIdx] ?? "";

  useEffect(() => {
    if (reduced) return;
    let t: ReturnType<typeof setTimeout>;
    if (s.phase === "typing") {
      if (s.text.length < current.length) {
        t = setTimeout(() => dispatch({ type: "APPEND", char: current[s.text.length] ?? "" }), 65);
      } else {
        t = setTimeout(() => dispatch({ type: "SET_PHASE", phase: "holding" }), 2200);
      }
    } else if (s.phase === "holding") {
      t = setTimeout(() => dispatch({ type: "SET_PHASE", phase: "erasing" }), 300);
    } else {
      if (s.text.length > 0) {
        t = setTimeout(() => dispatch({ type: "ERASE" }), 35);
      } else {
        t = setTimeout(() => dispatch({ type: "NEXT" }), 120);
      }
    }
    return () => clearTimeout(t);
  }, [s, current, reduced]);

  return s.text;
}

export function Hero({ t }: Props) {
  const reduced = useReducedMotion();
  const typeText = useTypewriter(t.titles);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  }, [reduced]);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Aurora orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora-orb-1 absolute rounded-full" style={{ width: "600px", height: "600px", top: "-80px", right: "-100px", background: "radial-gradient(circle at center, rgba(59,130,246,0.22) 0%, rgba(59,130,246,0.08) 45%, transparent 70%)", filter: "blur(72px)" }} />
        <div className="aurora-orb-2 absolute rounded-full" style={{ width: "520px", height: "520px", bottom: "-60px", left: "-80px", background: "radial-gradient(circle at center, rgba(139,92,246,0.20) 0%, rgba(139,92,246,0.07) 45%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="aurora-orb-3 absolute rounded-full" style={{ width: "380px", height: "380px", top: "35%", left: "15%", background: "radial-gradient(circle at center, rgba(6,182,212,0.13) 0%, rgba(6,182,212,0.04) 50%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(2,8,23,0.7) 100%)" }} />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" aria-hidden="true" style={{ backgroundImage: "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="block h-px w-12" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.6))" }} />
          <span className="text-xs font-mono tracking-[0.25em] uppercase" style={{ color: "rgba(59,130,246,0.9)" }}>{t.eyebrow}</span>
          <span className="block h-px w-12" style={{ background: "linear-gradient(90deg, rgba(59,130,246,0.6), transparent)" }} />
        </motion.div>

        {/* Name with gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="font-bold leading-[1.05] tracking-tight mb-6"
          style={{
            fontSize: "clamp(3rem, 10vw, 6.5rem)",
            background: "linear-gradient(135deg, #f8fafc 0%, #93c5fd 40%, #a78bfa 75%, #f8fafc 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: reduced ? "none" : "gradient-shift 6s linear infinite",
          }}
        >
          {personalInfo.displayName}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
          className="flex items-center justify-center mb-8 h-12"
          aria-live="polite"
          aria-label={`Role: ${typeText}`}
        >
          <span className="font-mono text-xl sm:text-2xl font-medium tracking-wide" style={{ color: "#93c5fd" }}>{typeText}</span>
          <span className="inline-block w-[2px] h-7 ml-1 rounded-sm" style={{ backgroundColor: "#3b82f6", animation: reduced ? "none" : "cursor-pulse 1s step-end infinite", boxShadow: "0 0 8px rgba(59,130,246,0.8)" }} aria-hidden="true" />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
          className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
          style={{ color: "rgba(148,163,184,0.9)" }}
        >
          {t.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.54, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollTo("projects")}
            className="px-8 py-3.5 rounded-xl font-semibold text-white text-base cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", boxShadow: "0 0 24px rgba(59,130,246,0.5), 0 4px 16px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.15)" }}
            whileHover={reduced ? {} : { boxShadow: "0 0 40px rgba(59,130,246,0.7), 0 4px 24px rgba(59,130,246,0.4)", y: -1 }}
            whileTap={reduced ? {} : { scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            {t.cta.work}
          </motion.button>
          <motion.button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 rounded-xl font-semibold text-white text-base cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
            whileHover={reduced ? {} : { background: "rgba(255,255,255,0.09)", y: -1 }}
            whileTap={reduced ? {} : { scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            {t.cta.contact}
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        aria-label={t.scrollLabel}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="relative w-px h-14 overflow-hidden" style={{ background: "rgba(148,163,184,0.2)" }} aria-hidden="true">
          <motion.div
            className="absolute top-0 left-0 w-full rounded-full"
            style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.8), rgba(139,92,246,0.6))", height: "50%" }}
            animate={reduced ? {} : { y: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "rgba(148,163,184,0.5)" }} aria-hidden="true">{t.scrollText}</span>
      </motion.button>
    </section>
  );
}
