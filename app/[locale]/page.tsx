import { notFound } from "next/navigation";
import { locales, type Locale, getTranslations } from "@/lib/i18n/translations";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;

  const t = getTranslations(locale);

  return (
    <>
      <Hero t={t.hero} />
      <About t={t.about} />
      <Projects t={t.projects} />
      <Experience t={t.experience} />
      <Contact t={t.contact} />
    </>
  );
}
