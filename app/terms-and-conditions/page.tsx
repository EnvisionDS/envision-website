import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { TERMS } from "@/lib/legal";
import "@/lib/fonts/site";
import "@/styles/service.css";
import "@/styles/mega.css";
import "@/styles/legal.css";

export const metadata: Metadata = { title: `${TERMS.title} | Envision`, description: TERMS.description };

export default function Page() {
  return <LegalPage title={TERMS.title} updated={TERMS.updated} intro={TERMS.intro} sections={TERMS.sections} />;
}
