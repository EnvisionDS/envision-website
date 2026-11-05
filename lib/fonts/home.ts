import { IBM_Plex_Sans, Sora } from "next/font/google";

// The fonts as the homepage and the contact page (and so the homepage's contact pop-up) were designed with:
// Sora 300/400/600/700 and IBM Plex Sans 400/500. The stylesheets name the families directly ("Sora", "IBM Plex Sans"),
// which is how next/font registers them.
export const sora = Sora({ subsets: ["latin"], weight: ["300", "400", "600", "700"], variable: "--font-sora", display: "swap" });
export const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex", display: "swap" });
