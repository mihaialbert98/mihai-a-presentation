import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/translations";

function getPreferredLocale(request: NextRequest): Locale {
  const acceptLang = request.headers.get("accept-language") ?? "";
  const negotiator = new Negotiator({
    headers: { "accept-language": acceptLang },
  });
  const preferred = negotiator.languages([...locales]);
  return (preferred[0] as Locale | undefined) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, _next internals, and already-localised paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    locales.some((l) => pathname.startsWith(`/${l}`))
  ) {
    return NextResponse.next();
  }

  // Redirect bare "/" to the preferred locale
  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
