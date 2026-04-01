"use client";

import { useInView } from "react-intersection-observer";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Link2 } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import type { Translations } from "@/lib/i18n/translations";

type Props = { t: Translations["contact"] };

export function Contact({ t }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6" aria-label={t.heading} style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-lg mx-auto" ref={ref}>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={item} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #93c5fd 60%, #a78bfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {t.heading}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6" />
          <p className="text-slate-400 leading-relaxed">{t.tagline}</p>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container} className="glass-panel p-8">
          <motion.div variants={item} className="mb-4">
            <Button href={`mailto:${personalInfo.email}`} variant="primary" size="lg" className="w-full justify-center">
              <Mail size={18} aria-hidden="true" />
              {t.email}
            </Button>
          </motion.div>
          <motion.div variants={item} className="mb-6">
            <Button href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" variant="ghost" size="lg" className="w-full justify-center">
              <Link2 size={18} aria-hidden="true" />
              {t.linkedin}
            </Button>
          </motion.div>
          <motion.div variants={item} className="border-t border-white/10 pt-6 text-center">
            <p className="text-slate-500 text-sm mb-1">{t.orReach}</p>
            <a href={`mailto:${personalInfo.email}`} className="text-blue-400 hover:text-blue-300 text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              {personalInfo.email}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
