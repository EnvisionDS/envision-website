import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "@/styles/typing.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://envisiondigitalsolutions.com.au"),
  title: "Envision Digital",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

// light or dark is chosen before the page paints, from the setting the theme button saves
const THEME = `try { if (localStorage.getItem("envision-theme") === "light") document.documentElement.dataset.theme = "light"; } catch (e) {}`;
// the typing animation is switched on before the page paints too, so the text doesn't show and then vanish (see lib/client/typing.js)
const TYPING = `if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.classList.add("ty");`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME }} />
        <script dangerouslySetInnerHTML={{ __html: TYPING }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
