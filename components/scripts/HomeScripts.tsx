"use client";

import { useEffect } from "react";
import { initHome } from "@/lib/client/home";

// Runs the homepage's behaviour (lib/client/home.js) once the page is on screen, once per page load.
let started = false;

export default function HomeScripts() {
  useEffect(() => {
    if (started) return;
    started = true;
    initHome();
  }, []);
  return null;
}
