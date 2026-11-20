import { Ctas } from "@/components/services/ServicePage";
import { POSTS, postDate, type Post } from "@/lib/blog";

// The blog (/blog) and each post (/blog/<slug>). The posts are in lib/blog.tsx; the look in styles/blog.css.

const ARROW = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// a post as a card: its topic, title, a line about it, when it was written and how long it takes to read
export function PostCard({ p, big = false }: { p: Post; big?: boolean }) {
  return (
    <a className={`bl-card beam rv${big ? " big" : ""}`} href={`/blog/${p.slug}`}>
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
        <div className="wrap">
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
  return (
    <main id="main">
      <section className="hero bl-hero">
        <div className="g-stage" data-scene="dust" aria-hidden="true"></div>
        <div className="g-veil left" aria-hidden="true"></div>
        <div className="wrap bl-head">
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
      </section>
      <section className="band" aria-label="The article">
        <div className="wrap">
          <article className="prose bl-body">{p.body}</article>
          <p className="bl-back">
            <a href="/blog">
              <span aria-hidden="true">&larr;</span> All posts
            </a>
          </p>
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
