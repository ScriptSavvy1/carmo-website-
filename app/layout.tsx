import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import { themeInitScript } from "@/components/ThemeToggle";
import { site } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "software development Somalia",
    "Mogadishu technology company",
    "AI and automation Horn of Africa",
    "management information systems",
    "brand and UI design Somalia",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  // Dark is the site's default; the toggle rewrites this at runtime.
  themeColor: "#070c15",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      // The pre-paint script below may change data-theme before React hydrates.
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable}`}
    >
      <head>
        {/* Applies the stored theme before first paint, so a returning
            light-mode visitor never sees a flash of dark (or vice versa). */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />

        {/* Scroll-reveal is JS-driven; without it, show everything immediately
            rather than leaving the page below the fold invisible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;filter:none !important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col bg-canvas text-fg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-navy-800 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
