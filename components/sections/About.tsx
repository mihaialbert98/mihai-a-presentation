"use client";

import { useInView } from "react-intersection-observer";
import { motion, useReducedMotion } from "framer-motion";
import { personalInfo, skills, certifications } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import type { Translations } from "@/lib/i18n/translations";

type Props = { t: Translations["about"] };

const badgeVariants = ["blue", "violet", "teal"] as const;
function getBadgeVariant(index: number): "blue" | "violet" | "teal" {
  return badgeVariants[index % badgeVariants.length] ?? "teal";
}

export function About({ t }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6" aria-label={t.heading} style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={item} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #93c5fd 60%, #a78bfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {t.heading}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto" />
        </motion.div>

        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container} className="grid md:grid-cols-2 gap-8">
          {/* Left: Bio */}
          <motion.div variants={item}>
            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">{t.whoIAm}</h3>
              <p className="text-slate-300 leading-relaxed mb-6">{personalInfo.bio}</p>
              <p className="text-slate-400 leading-relaxed mb-8">{t.extra}</p>
              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">{t.certifications}</h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, i) => (
                    <Badge key={cert} variant={getBadgeVariant(i)}>{cert}</Badge>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right: Skills */}
          <motion.div variants={item}>
            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-violet-400 mb-6">{t.techStack}</h3>
              <div className="space-y-5">
                {skills.map((group) => (
                  <div key={group.category}>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      {t.skillCategories[group.category as keyof typeof t.skillCategories] ?? group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, i) => (
                        <Badge key={skill} variant={getBadgeVariant(i)}>{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
