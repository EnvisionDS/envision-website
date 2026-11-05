import type { ReactNode } from "react";

// a 24×24 line icon; the shapes come from lib/menu.tsx and lib/services.tsx
export default function Icon({ children, hidden = true }: { children: ReactNode; hidden?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={hidden ? "true" : undefined}>
      {children}
    </svg>
  );
}
