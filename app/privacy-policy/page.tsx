import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { PRIVACY } from "@/lib/legal";
import "@/lib/fonts/site";
import "@/styles/service.css";
import "@/styles/mega.css";
import "@/styles/legal.css";

export const metadata: Metadata = { title: `${PRIVACY.title} | Envision`, description: PRIVACY.description };

export default function Page() {
  return <LegalPage title={PRIVACY.title} updated={PRIVACY.updated} intro={PRIVACY.intro} sections={PRIVACY.sections} />;
}
