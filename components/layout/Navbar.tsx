"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { locales, getTranslations, type Locale } from "@/lib/i18n/translations";

export function Navbar({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();
  const pathname = usePathname();

  const t = getTranslations(locale);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const switchLocale = (next: Locale) => {
    // Replace the locale segment in the current path
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || `/${next}`);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 border-b border-white/10" : "bg-transparent py-5"
      )}
      style={
        scrolled
          ? {
              backgroundColor: "rgba(2, 8, 23, 0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }
          : undefined
      }
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="text-white font-semibold text-lg tracking-tight hover:text-blue-400 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
          }}
        >
          <span className="text-blue-400">&lt;</span>
          {personalInfo.displayName}
          <span className="text-blue-400">&nbsp;/&gt;</span>
        </a>

        {/* Desktop links + lang switcher */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Language switcher */}
          <div
            className="flex items-center rounded-lg overflow-hidden border border-white/10"
            style={{ background: "rgba(255,255,255,0.05)" }}
            role="group"
            aria-label="Language switcher"
          >
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={cn(
                  "px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                  l === locale
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-300"
                )}
                style={
                  l === locale
                    ? { background: "rgba(59,130,246,0.3)" }
                    : undefined
                }
                aria-current={l === locale ? "true" : undefined}
                aria-label={`Switch to ${l === "en" ? "English" : "Romanian"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2 rounded-xl overflow-hidden border border-white/10"
            style={{
              backgroundColor: "rgba(2, 8, 23, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <ul className="flex flex-col py-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-6 py-3 text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile language switcher */}
            <div className="flex gap-2 px-6 py-3 border-t border-white/10">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => { setMobileOpen(false); switchLocale(l); }}
                  className={cn(
                    "px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                    l === locale
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-300"
                  )}
                  style={
                    l === locale
                      ? { background: "rgba(59,130,246,0.3)", border: "1px solid rgba(59,130,246,0.4)" }
                      : { border: "1px solid rgba(255,255,255,0.1)" }
                  }
                  aria-current={l === locale ? "true" : undefined}
                >
                  {l === "en" ? "🇬🇧 EN" : "🇷🇴 RO"}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
