import type { ReactNode } from "react";

// The blog (/blog, and /blog/<slug> for each post; a snippet of the latest three on the homepage). Plain-English guides
// drawn from how we work. Keep them honest: no figures or client results unless the client has shared them.
// The newest post goes first.
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  topic: "Websites" | "Marketing" | "Automation" | "Strategy";
  minutes: number;
  body: ReactNode;
};

export const POSTS: Post[] = [
  {
    slug: "signs-your-website-is-costing-you-enquiries",
    title: "Six signs your website is costing you enquiries",
    excerpt: "People visit, look around and leave without calling. Here's how to tell whether your site is the reason, and what to fix first.",
    date: "2026-11-20",
    topic: "Websites",
    minutes: 4,
    body: (
      <>
        <p>
          A website can look fine and still quietly turn people away. The test isn&apos;t whether you like it, it&apos;s whether
          the right visitors call, book or fill in the form. If they don&apos;t, one of these is usually why.
        </p>
        <h2>1. It doesn&apos;t say what you do in the first few seconds</h2>
        <p>
          Someone landing on your homepage should know straight away what you do, who it&apos;s for and where you work. A clever
          slogan that needs explaining sends people back to the search results.
        </p>
        <h2>2. It&apos;s hard to use on a phone</h2>
        <p>
          Most local searches happen on a phone. Small text, buttons too close together and pages that jump around as they load
          all make it easier to leave than to call.
        </p>
        <h2>3. There&apos;s no obvious next step</h2>
        <p>
          Every page should make the next move clear: call, book, or send a short form. If people have to hunt for your phone
          number, many won&apos;t.
        </p>
        <h2>4. It&apos;s slow</h2>
        <p>
          Heavy images and too many add-ons slow a site down, and people don&apos;t wait. Speed is one of the simplest things to
          measure and one of the quickest to improve.
        </p>
        <h2>5. Updating it means waiting on someone else</h2>
        <p>
          If changing a price or adding a service takes weeks, the site falls out of date, and an out-of-date site costs trust.
        </p>
        <h2>6. You can&apos;t tell which enquiries came from it</h2>
        <p>
          Without call and form tracking you can&apos;t see what&apos;s working, so you can&apos;t do more of it. That&apos;s worth fixing
          before anything else, because it tells you where to start.
        </p>
        <h2>Where to start</h2>
        <p>
          If a few of these sound familiar, start with the first impression and the next step: they usually make the biggest
          difference for the least work. If you&apos;d like a second opinion, we&apos;re happy to take a look.
        </p>
      </>
    ),
  },
  {
    slug: "google-business-profile-basics",
    title: "Google Business Profile: the free listing most local businesses underuse",
    excerpt: "When people search for what you do nearby, your profile is often the first thing they see. A few simple habits make it work much harder.",
    date: "2026-11-13",
    topic: "Marketing",
    minutes: 4,
    body: (
      <>
        <p>
          Search for a local service and the map results usually appear before the websites. That box is built from Google
          Business Profiles, and it&apos;s free. Yet many profiles are half finished, or haven&apos;t been touched since they were set
          up.
        </p>
        <h2>Get the basics complete and accurate</h2>
        <p>
          Choose the categories that match what you actually do, list your services and the areas you cover, and keep your
          hours right, including public holidays. An incomplete profile gives people fewer reasons to choose you.
        </p>
        <h2>Show real photos</h2>
        <p>
          Your team, your premises, your work. Real photos help people picture what it&apos;s like to deal with you, far more than
          stock images do.
        </p>
        <h2>Ask for reviews, and reply to them</h2>
        <p>
          Reviews build trust, and they help you appear in more searches. Make asking part of how you finish a job, and reply
          to every review, good or bad, in a calm, helpful way.
        </p>
        <h2>Post now and then</h2>
        <p>
          A short update about an offer, a new service or a recent project shows the business is active. It doesn&apos;t need to
          be often, just regular.
        </p>
        <h2>Keep it in step with your website</h2>
        <p>
          Your name, address and phone number should match everywhere they appear. Small differences confuse search engines and
          customers alike.
        </p>
      </>
    ),
  },
  {
    slug: "how-to-know-if-your-marketing-is-working",
    title: "How to know if your marketing is working, without the jargon",
    excerpt: "Likes and impressions don't pay the bills. Here are the few measures that tell you whether your marketing is bringing in work.",
    date: "2026-11-06",
    topic: "Strategy",
    minutes: 3,
    body: (
      <>
        <p>
          Marketing reports can be full of numbers that sound good and mean little. If you want a straight answer to whether it&apos;s
          working, look at what turns into work.
        </p>
        <h2>Count the enquiries</h2>
        <p>
          Phone calls, form enquiries and booked appointments are the clearest signs that marketing is doing its job. Everything
          else is a step on the way.
        </p>
        <h2>Know where each one came from</h2>
        <p>
          Was it a Google search, an ad, your profile, a referral? Call and form tracking answers that, so you can put more into
          what works and stop paying for what doesn&apos;t.
        </p>
        <h2>Work out what each enquiry costs</h2>
        <p>
          Divide what you spent on a channel by the enquiries it brought in. It&apos;s the simplest way to compare channels fairly.
        </p>
        <h2>Be wary of vanity measures</h2>
        <p>
          Followers, impressions and rankings for searches nobody makes can all rise while enquiries stay flat. They&apos;re fine to
          watch, but they&apos;re not the goal.
        </p>
        <h2>Ask for it in plain English</h2>
        <p>
          A good update tells you what happened, what it means and what changes next, in words you&apos;d use yourself. That&apos;s how
          we report, every week.
        </p>
      </>
    ),
  },
  {
    slug: "stop-losing-leads-with-simple-follow-up",
    title: "Stop losing leads: what a simple CRM and follow-up can do",
    excerpt: "Enquiries arrive by phone, email, forms and messages, and some never get a reply. A little structure fixes that.",
    date: "2026-10-30",
    topic: "Automation",
    minutes: 3,
    body: (
      <>
        <p>
          Most businesses don&apos;t have a lead problem so much as a follow-up problem. Enquiries come in through too many places,
          someone means to reply, and the moment passes.
        </p>
        <h2>Put every enquiry in one place</h2>
        <p>
          A CRM is simply a shared list of everyone who has got in touch, what they asked for and what happens next. When every
          form, call and message lands there, nothing slips through.
        </p>
        <h2>Reply quickly, automatically if you must</h2>
        <p>
          An instant confirmation that you&apos;ve received someone&apos;s enquiry, and when they&apos;ll hear from you, keeps them from
          moving on to the next business, even after hours.
        </p>
        <h2>Remind people, and yourself</h2>
        <p>
          Booking confirmations and reminders cut no-shows. Simple reminders for your team make sure every lead gets a next step.
        </p>
        <h2>Connect the tools you already use</h2>
        <p>
          Your website, calendar, email and accounting software can share details with each other, so nobody copies the same
          information by hand.
        </p>
        <h2>Start small</h2>
        <p>
          You don&apos;t need to automate everything at once. Start with the moment you most often lose people, and build from there.
        </p>
      </>
    ),
  },
];

export const POST_BY_SLUG: Record<string, Post> = Object.fromEntries(POSTS.map((p) => [p.slug, p]));

export function postDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}
