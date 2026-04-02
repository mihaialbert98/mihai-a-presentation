"use client";

import { useInView } from "react-intersection-observer";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import { experience, education } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Translations } from "@/lib/i18n/translations";

type Props = { t: Translations["experience"] };

export function Experience({ t }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6" aria-label={t.heading} style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={item} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #93c5fd 60%, #a78bfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {t.heading}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-teal-500 mx-auto" />
        </motion.div>

        {/* Work */}
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container} className="mb-12">
          <motion.h3 variants={item} className="flex items-center gap-2 text-lg font-semibold text-slate-300 mb-8">
            <Briefcase size={20} className="text-violet-400" />
            {t.workExperience}
          </motion.h3>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-px" style={{ background: "linear-gradient(to bottom, #3b82f6, #8b5cf6)" }} aria-hidden="true" />
            <div className="space-y-10">
              {experience.map((entry, index) => {
                const content = t.items[entry.id as keyof typeof t.items];
                if (!content) return null;
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={entry.id}
                    variants={item}
                    className={`relative flex md:items-center gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="timeline-node absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#020817] -translate-x-1.5 mt-5 md:mt-0 flex-shrink-0" aria-hidden="true" />
                    <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-8 md:text-right" : "md:ml-8 md:text-left"}`}>
                      <GlassCard className="text-left">
                        <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                          <h4 className="font-semibold text-white">{content.role}</h4>
                          <span className="text-xs text-slate-500 font-mono whitespace-nowrap">{entry.period}</span>
                        </div>
                        <p className="text-violet-400 font-medium text-sm mb-4">{entry.company}</p>
                        <ul className="space-y-2" role="list">
                          {content.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-2 text-slate-400 text-sm">
                              <CheckCircle size={14} className="text-teal-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </GlassCard>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container}>
          <motion.h3 variants={item} className="flex items-center gap-2 text-lg font-semibold text-slate-300 mb-8">
            <GraduationCap size={20} className="text-teal-400" />
            {t.education}
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((entry) => {
              const content = t.educationItems[entry.id as keyof typeof t.educationItems];
              if (!content) return null;
              return (
                <motion.div key={entry.id} variants={item}>
                  <GlassCard>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap size={16} className="text-teal-400 flex-shrink-0" aria-hidden="true" />
                      <span className="text-xs text-slate-500 font-mono">{entry.period}</span>
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-1">{content.degree}</h4>
                    <p className="text-slate-400 text-sm">{entry.institution}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
