import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { locales, defaultLocale, type Locale, getTranslations } from "@/lib/i18n/translations";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : defaultLocale;
  const t = getTranslations(locale);
  const isRo = locale === "ro";

  return {
    title: isRo
      ? "Mihai Albert — Dezvoltator Frontend Senior"
      : "Mihai Albert — Senior Frontend Developer",
    description: isRo
      ? "Portofoliu al lui Albert Mihai Ioan, Dezvoltator Frontend Senior cu 8+ ani experiență în React, TypeScript și Next.js."
      : "Portfolio of Albert Mihai Ioan, Senior Frontend Developer with 8+ years specializing in React, TypeScript, and Next.js.",
    metadataBase: new URL("https://mihai-albert.dev"),
    alternates: {
      canonical: `https://mihai-albert.dev/${locale}`,
      languages: {
        en: "https://mihai-albert.dev/en",
        ro: "https://mihai-albert.dev/ro",
      },
    },
    openGraph: {
      title: isRo
        ? "Mihai Albert — Dezvoltator Frontend Senior"
        : "Mihai Albert — Senior Frontend Developer",
      description: t.about.bio,
      url: `https://mihai-albert.dev/${locale}`,
      type: "website",
      siteName: "Mihai Albert Portfolio",
      locale: isRo ? "ro_RO" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;

  return (
    <html lang={locale} className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#020817] text-slate-200 antialiased">
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
