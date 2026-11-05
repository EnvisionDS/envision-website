export default function Faq() {
  return (
    <section className="block panel tone-slate" id="faq">
      <p className="eyebrow reveal">Common questions</p>
      <h2 className="reveal">
        Honest answers to what clients usually <span className="grad">ask first</span>
      </h2>
      <div className="faq">
        <details className="reveal">
          <summary>What if I have tried agencies before and been disappointed?</summary>
          <p>
            That is common. Our approach is intentionally transparent, strategy-led, and grounded in practical weekly
            actions tied to real outcomes.
          </p>
        </details>
        <details className="reveal">
          <summary>How much does it cost?</summary>
          <p>
            It depends on what you need, and we don't have fixed packages. We start from your budget, whether that's a
            one-off project like a new website or a monthly plan for ongoing marketing, and tell you upfront what it can
            achieve. <a href="#pricing">How pricing works</a>
          </p>
        </details>
        <details className="reveal">
          <summary>Do I need a large budget to get started?</summary>
          <p>
            No. We start with what you're comfortable spending and put it into the one or two things most likely to
            bring in enquiries first. As results come in, you can add more at your own pace.
          </p>
        </details>
        <details className="reveal">
          <summary>How quickly can we start seeing useful signals?</summary>
          <p>
            Most businesses start seeing clearer performance direction in the early weeks, with stronger improvements as
            optimisation compounds.
          </p>
        </details>
        <details className="reveal">
          <summary>Can you handle website builds if I do not need full design?</summary>
          <p>
            Yes. We can work from existing brand assets, simple references, or wireframes and focus on a strong
            development implementation.
          </p>
        </details>
      </div>
    </section>
  );
}
