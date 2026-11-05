import type { ReactNode } from "react";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import ServiceScripts from "@/components/scripts/ServiceScripts";

export type LegalSection = { id: string; title: string; body: ReactNode };

// A legal page (Privacy Policy, Terms & Conditions): the title and date, a numbered contents list, then each section.
// The wording is in lib/legal.tsx; the look in styles/legal.css.
export default function LegalPage({ title, updated, intro, sections }: { title: string; updated: string; intro: string; sections: LegalSection[] }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "body{--c:#98c1d9}" }} />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        <section className="hero legal-hero">
          <div className="wrap">
            <p className="crumbs">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <span>{title}</span>
            </p>
            <p className="vf">
              <span className="vf-ret" aria-hidden="true">
                <i></i>
              </span>
              <span>{`Legal · Last updated ${updated}`}</span>
            </p>
            <h1>{title}</h1>
            <p className="lede">{intro}</p>
          </div>
        </section>

        <section className="band">
          <div className="wrap legal">
            <nav className="legal-toc" aria-label="On this page">
              <p className="label">On this page</p>
              <ol>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="legal-body">
              {sections.map((s, i) => (
                <section className="legal-sec rv" id={s.id} aria-labelledby={`${s.id}-h`} key={s.id}>
                  <h2 id={`${s.id}-h`}>
                    <span className="n">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </h2>
                  {s.body}
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter href="/" label="Back to the homepage" />
      <ServiceScripts />
    </>
  );
}
