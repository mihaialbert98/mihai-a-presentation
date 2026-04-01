// This root layout is intentionally minimal.
// The real <html>/<body> shell lives in app/[locale]/layout.tsx.
// Next.js requires a root layout to exist; the proxy redirects all
// traffic to a locale-prefixed route before this ever renders a page.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
