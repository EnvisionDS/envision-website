import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import Icon from "@/components/site/Icon";
import { Ctas } from "@/components/services/ServicePage";
import { GROUPS } from "@/lib/menu";
import { POSTS, postDate, type Post } from "@/lib/blog";

// The blog (/blog) and each post (/blog/<slug>). The posts are in lib/blog.tsx; the look in styles/blog.css; the topic
// filter on /blog in lib/client/blog.js.

// each topic takes the icon and colour of the service area it belongs to
const AREA: Record<Post["topic"], string> = { Websites: "web", Marketing: "mkt", Automation: "auto", Strategy: "consult" };
const areaOf = (topic: Post["topic"]) => GROUPS.find((g) => g.id === AREA[topic]) ?? GROUPS[0];
const TOPICS = (Object.keys(AREA) as Post["topic"][]).map((t) => ({ t, n: POSTS.filter((p) => p.topic === t).length, g: areaOf(t) }));

const slug = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const text = (n: ReactNode): string => (typeof n === "string" || typeof n === "number" ? String(n) : Array.isArray(n) ? n.map(text).join("") : isValidElement(n) ? text((n as ReactElement<{ children?: ReactNode }>).props.children) : "");

const ARROW = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// a post as a card: its topic, title, a line about it, when it was written and how long it takes to read
export function PostCard({ p, big = false }: { p: Post; big?: boolean }) {
  return (
    <a className={`bl-card beam rv${big ? " big" : ""}`} href={`/blog/${p.slug}`} data-topic={p.topic}>
      <span className="bl-topic">{p.topic}</span>
      <h3>{p.title}</h3>
      <p>{p.excerpt}</p>
      <span className="bl-meta">
        <time dateTime={p.date}>{postDate(p.date)}</time> · {p.minutes} min read
      </span>
      <span className="bl-go">Read the article {ARROW}</span>
    </a>
  );
}

function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-h">
      <div className="g-stage" data-scene="dust" aria-hidden="true"></div>
      <div className="wrap cta rv">
        <p className="label">Next step</p>
        <h2 id="cta-h">Book a discovery call</h2>
        <p>Tell us what you&apos;re working on and we&apos;ll point you to what will make the biggest difference first.</p>
        <Ctas href="/contact" />
      </div>
    </section>
  );
}

export function BlogIndex() {
  const [first, ...rest] = POSTS;
  return (
    <main id="main">
      <section className="hero bl-hero">
        <div className="g-stage" data-scene="dust" aria-hidden="true"></div>
        <div className="g-veil left" aria-hidden="true"></div>
        <div className="wrap hero-grid">
          <div>
          <p className="crumbs">
            <a href="/" data-home="">
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span>Blogs</span>
          </p>
          <p className="vf">
            <span className="vf-ret" aria-hidden="true">
              <i></i>
            </span>
            <span>The Envision blog</span>
          </p>
          <h1>Plain-English guides to growing online</h1>
          <p className="lede">
            Practical advice on websites, search, ads and follow-up for local businesses, written the way we&apos;d explain it
            across the table.
          </p>
          </div>
          {/* browse by topic: picks which posts show below */}
          <nav className="bl-topics" aria-label="Browse by topic">
            <p className="label">Browse by topic</p>
            <button type="button" className="bl-topic-btn on" data-filter="" aria-pressed="true">
              <span className="bl-topic-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h10" />
                </svg>
              </span>
              <b>All posts</b>
              <i>{POSTS.length}</i>
            </button>
            {TOPICS.filter((x) => x.n > 0).map((x) => (
              <button type="button" className="bl-topic-btn" data-filter={x.t} aria-pressed="false" style={{ "--c": x.g.color }} key={x.t}>
                <span className="bl-topic-ico" aria-hidden="true">
                  <Icon>{x.g.icon}</Icon>
                </span>
                <b>{x.t}</b>
                <i>{x.n}</i>
              </button>
            ))}
          </nav>
        </div>
      </section>
      <section className="band" aria-label="All posts">
        <div className="wrap">
          <div className="bl-grid">
            <PostCard p={first} big />
            {rest.map((p) => (
              <PostCard p={p} key={p.slug} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}

export function BlogPost({ p }: { p: Post }) {
  const more = POSTS.filter((x) => x.slug !== p.slug).slice(0, 3);
  const g = areaOf(p.topic);
  // the article's sections: each heading gets an id, and they're listed beside the article
  const kids = Children.toArray((p.body as ReactElement<{ children?: ReactNode }>).props.children);
  const heads: { id: string; t: string }[] = [];
  const body = kids.map((k) => {
    if (isValidElement(k) && k.type === "h2") {
      const t = text((k as ReactElement<{ children?: ReactNode }>).props.children), id = slug(t);
      heads.push({ id, t });
      return cloneElement(k as ReactElement<{ id?: string }>, { id });
    }
    return k;
  });
  return (
    <main id="main" style={{ "--c": g.color }}>
      {/* how far through the article the reader is (lib/client/blog.js) */}
      <div className="bl-progress" aria-hidden="true">
        <i></i>
      </div>
      <section className="hero bl-hero">
        <div className="g-stage" data-scene="dust" aria-hidden="true"></div>
        <div className="g-veil left" aria-hidden="true"></div>
        <div className="wrap hero-grid">
          <div className="bl-head">
            <p className="crumbs">
              <a href="/" data-home="">
                Home
              </a>
              <span aria-hidden="true">/</span>
              <a href="/blog">Blogs</a>
              <span aria-hidden="true">/</span>
              <span>{p.topic}</span>
            </p>
            <p className="vf">
              <span className="vf-ret" aria-hidden="true">
                <i></i>
              </span>
              <span>{p.topic}</span>
            </p>
            <h1>{p.title}</h1>
            <p className="lede">{p.excerpt}</p>
            <p className="bl-meta">
              <time dateTime={p.date}>{postDate(p.date)}</time> · {p.minutes} min read · The Envision team
            </p>
          </div>
          {/* the cover: the topic's icon in 3D (lib/client/icon3d.js), with a card naming the topic */}
          <div className="ph-hero bl-cover" aria-hidden="true">
            <div className="ph-frame i3" data-icon3d="">
              <span className="i3-flat">
                <Icon>{g.icon}</Icon>
              </span>
            </div>
            <span className="ph-chip">
              <i>
                <Icon hidden={false}>{g.icon}</Icon>
              </i>
              <span>
                <b>{p.topic}</b>
                {`${p.minutes} min read`}
              </span>
            </span>
          </div>
        </div>
      </section>
      <section className="band" aria-label="The article">
        <div className="wrap bl-layout">
          <article className="prose bl-body">{body}</article>
          <aside className="bl-side">
            <div className="bl-side-in">
              {heads.length ? (
                <nav className="bl-toc" aria-label="In this article">
                  <p className="label">In this article</p>
                  <ol>
                    {heads.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`}>{h.t.replace(/^\d+\.\s*/, "")}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : null}
              <div className="bl-by">
                <span className="bl-by-mark" aria-hidden="true">
                  e
                </span>
                <span>
                  <b>The Envision team</b>
                  <time dateTime={p.date}>{postDate(p.date)}</time>
                </span>
              </div>
              <div className="bl-ask">
                <p>Want a hand with this for your business?</p>
                <a className="btn" href="/contact">
                  Book a discovery call <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <a className="bl-all" href="/blog">
                <span aria-hidden="true">&larr;</span> All posts
              </a>
            </div>
          </aside>
        </div>
      </section>
      <section className="band" aria-labelledby="more-h">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="label">Keep reading</p>
            <h2 id="more-h">More from the blog</h2>
          </div>
          <div className="bl-grid three">
            {more.map((x) => (
              <PostCard p={x} key={x.slug} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
