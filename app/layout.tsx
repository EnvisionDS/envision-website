import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
