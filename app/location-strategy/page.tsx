import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import "@/lib/fonts/site";
import "@/styles/service.css";
import "@/styles/mega.css";
import { SERVICE_BY_KEY } from "@/lib/services";

const s = SERVICE_BY_KEY["location-strategy"];

export const metadata: Metadata = { title: s.metaTitle, description: s.description };

export default function Page() {
  return <ServicePage s={s} />;
}
