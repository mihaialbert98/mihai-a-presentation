import { personalInfo } from "@/lib/data";
import { type Locale } from "@/lib/i18n/translations";

const builtWith: Record<Locale, React.ReactNode> = {
  en: (
    <>
      Built with <span className="text-blue-400">Next.js</span> &amp;{" "}
      <span className="text-violet-400">Framer Motion</span>
    </>
  ),
  ro: (
    <>
      Construit cu <span className="text-blue-400">Next.js</span> &amp;{" "}
      <span className="text-violet-400">Framer Motion</span>
    </>
  ),
};

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {year}{" "}
          <span className="text-slate-400">{personalInfo.name}</span>
          {" — "}
          {builtWith[locale]}
        </p>
      </div>
    </footer>
  );
}
