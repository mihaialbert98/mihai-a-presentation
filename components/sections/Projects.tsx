"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Translations } from "@/lib/i18n/translations";

type Props = { t: Translations["projects"] };

const badgeVariants = ["blue", "violet", "teal"] as const;
function getBadgeVariant(index: number): "blue" | "violet" | "teal" {
  return badgeVariants[index % badgeVariants.length] ?? "teal";
}

export function Projects({ t }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6" aria-label={t.heading} style={{ scrollMarginTop: "80px" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={item} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #93c5fd 60%, #a78bfa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {t.heading}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto" />
        </motion.div>

        <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <GlassCard hover className="flex flex-col h-full p-0 overflow-hidden">
                <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: "linear-gradient(to top, rgba(2,8,23,0.8), transparent)" }} aria-hidden="true" />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, i) => (
                      <Badge key={tag} variant={getBadgeVariant(i)}>{tag}</Badge>
                    ))}
                  </div>
                  <Button href={project.url} target="_blank" rel="noopener noreferrer" variant="ghost" size="md" className="w-full justify-center">
                    <ExternalLink size={16} />
                    {t.viewLive}
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
