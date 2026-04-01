import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n/translations";

// Middleware handles the redirect for browsers, but this covers
// direct SSR requests that bypass the middleware (e.g. server-side fetches).
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
