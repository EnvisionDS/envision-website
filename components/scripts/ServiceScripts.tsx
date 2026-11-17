"use client";

import { useEffect } from "react";
import { initMegaMenu } from "@/lib/client/mega";
import { initServicePage } from "@/lib/client/service";
import { initValuesWheel } from "@/lib/client/about";
import { initContactPage } from "@/lib/client/contact-page";
import { initServicesIndex } from "@/lib/client/services-index";

// Runs the page's behaviour once it is on screen: the theme switch, the nav, the reveals and the Services menu on every
// page, plus the values wheel on About, the enquiry form on Contact and the sticky bar on Services. Each runs once per page load.
let started = false;

export default function ServiceScripts({ page }: { page?: "about" | "contact" | "services" }) {
  useEffect(() => {
    if (started) return;
    started = true;
    initServicePage();
    initMegaMenu();
    if (page === "about") initValuesWheel();
    if (page === "contact") initContactPage();
    if (page === "services") initServicesIndex();
  }, [page]);
  return null;
}
