import { POSTS, postDate } from "@/lib/blog";

// FROM THE BLOG: the three newest posts as a snippet, and a way into the blog (/blog). Styles in styles/home-blog.css.
export default function FromTheBlog() {
  return (
    <section className="block" id="blog">
      <p className="eyebrow reveal">From the blog</p>
      <h2 className="reveal">
        Guides you can <span className="grad">use this week</span>
      </h2>
      <p className="reveal">Plain-English advice on websites, search, ads and follow-up, from the way we work with clients.</p>
      <div className="hb-grid">
        {POSTS.slice(0, 3).map((p) => (
          <a className="hb-card reveal" href={`/blog/${p.slug}`} key={p.slug}>
            <span className="hb-topic">{p.topic}</span>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
            <span className="hb-meta">
              <time dateTime={p.date}>{postDate(p.date)}</time> · {p.minutes} min read
            </span>
            <span className="hb-go">
              Read the article <span aria-hidden="true">&rarr;</span>
            </span>
          </a>
        ))}
      </div>
      <div className="hb-all reveal">
        <a className="pill solid" href="/blog">
          See all posts
        </a>
      </div>
    </section>
  );
}
