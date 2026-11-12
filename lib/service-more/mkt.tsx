import type { ServiceMore } from "./types";

export const MKT: Record<string, ServiceMore> = {
  seo: {
    stairsHeading: "How we grow your search traffic",
    stairsIntro: "Each step builds on the last, so your site earns more of the searches that turn into calls.",
    stairs: [
      { title: "Research the searches", text: "We find what local customers type in, and which searches lead to enquiries.", icon: "search" },
      { title: "Check the competition", text: "We look at who ranks now, and what their pages do that yours don't yet.", icon: "eye" },
      { title: "Fix the foundations", text: "We sort out structure, speed and technical issues holding your site back.", icon: "settings" },
      { title: "Build the right pages", text: "We create service and suburb pages that match real searches in your area.", icon: "file" },
      { title: "Strengthen local signals", text: "We tidy your Google Business Profile and listings so they back up your site.", icon: "map" },
      { title: "Report and refine", text: "Each month we track rankings, traffic and enquiries, and adjust the plan.", icon: "chart" },
    ],
    sections: [
      {
        kind: "cards",
        label: "Timing",
        heading: "What affects how quickly SEO works",
        intro: "SEO builds over time rather than switching on overnight. How long it takes depends on a few things.",
        items: [
          { title: "Where your site starts", text: "A site with technical problems or thin pages needs fixing before new content can do its job." },
          { title: "How competitive your area is", text: "Some services and suburbs have plenty of businesses chasing the same searches, so it takes longer to stand out." },
          { title: "How much content you need", text: "If customers search for services you don't have pages for yet, those pages need to be built first." },
          { title: "How consistent the work is", text: "Steady improvements month after month tend to outlast a burst of activity followed by nothing." },
        ],
      },
      {
        kind: "checklist",
        label: "Your monthly report",
        heading: "How you'll know it's working",
        intro: "Every month you get a plain-English report covering:",
        items: [
          "Where you rank for the searches that matter to your business",
          "How many people found your site through search",
          "Which pages they landed on",
          "Calls and enquiries that came from search",
          "What we worked on, and what's planned next",
        ],
      },
      {
        kind: "faq",
        label: "Straight answers",
        heading: "Common questions about SEO",
        items: [
          { q: "Can you guarantee a number one ranking?", a: "No, and be wary of anyone who does. Google decides the rankings. What we can do is make your site the clearest, most useful answer for the searches your customers make." },
          { q: "Do I need a new website for SEO?", a: "Not always. Many sites can be improved where they are. If the structure or platform is holding you back, we'll tell you plainly and explain the options." },
          { q: "How is local SEO different?", a: "Local SEO focuses on searches tied to a place, like a service plus a suburb. It also covers your Google Business Profile, which often shows up before the regular results." },
          { q: "Should I do SEO or ads?", a: "SEO builds a channel that keeps working when the spend stops, while ads can bring enquiries sooner. Many businesses use both, and we'll help you decide what suits your goals." },
          { q: "What does SEO cost?", a: "It depends on how competitive your market is, how much work your site needs and how many pages you need. We quote after a discovery call, once we understand where you're starting from." },
        ],
      },
    ],
  },

  "paid-ads": {
    stairsHeading: "How we run your Google Ads and Meta Ads",
    stairsIntro: "Ads, tracking and landing pages are planned together, then improved week by week.",
    stairs: [
      { title: "Agree the goal", text: "We set the enquiries you want, the areas you serve and the budget to work with.", icon: "target" },
      { title: "Set up tracking", text: "We make sure every call and form from your ads is recorded before we spend a cent.", icon: "check" },
      { title: "Shape the audience", text: "We choose the searches, interests and locations most likely to become customers.", icon: "users" },
      { title: "Write and build", text: "We write the ads, build the campaigns and match each one to the right landing page.", icon: "pen" },
      { title: "Launch and watch", text: "We go live and watch the early results closely, adjusting bids and targeting.", icon: "rocket" },
      { title: "Optimise weekly", text: "Each week we cut what isn't working and move budget to what brings enquiries.", icon: "refresh" },
    ],
    sections: [
      {
        kind: "compare",
        label: "Choosing a platform",
        heading: "Google Ads or Meta Ads?",
        tone: "options",
        left: {
          title: "Google Ads",
          items: [
            "Reaches people actively searching for what you offer",
            "Suits urgent needs, like a repair or a booking this week",
            "Works best when people already know the service exists",
            "Keywords and locations decide who sees your ad",
          ],
        },
        right: {
          title: "Meta Ads",
          items: [
            "Reaches people on Facebook and Instagram before they search",
            "Suits offers that look good and spark interest",
            "Builds familiarity in your local area over time",
            "Interests, age and location decide who sees your ad",
          ],
        },
      },
      {
        kind: "faq",
        label: "Budget and spend",
        heading: "Your ad budget, explained",
        items: [
          { q: "How much should I spend on ads?", a: "It depends on how competitive your industry is, the areas you want to reach and how many enquiries you're after. We talk it through on a discovery call and recommend a starting point that suits your goals." },
          { q: "Is a bigger budget always better?", a: "No. A bigger budget on poorly targeted campaigns just buys more of the wrong clicks. We focus on getting the targeting and landing pages right first, then grow spend where it's bringing in enquiries." },
          { q: "Can I change my budget later?", a: "Yes. Budgets can be adjusted up or down, and we'll explain what we expect the change to do before we make it." },
          { q: "How do I know where my money went?", a: "Our weekly report shows what was spent, where, and which campaigns brought in calls and enquiries, all in plain English." },
          { q: "What does your management cost?", a: "It depends on the number of platforms, campaigns and areas involved. We quote after a discovery call, so you know exactly what's included before you start." },
        ],
      },
      {
        kind: "checklist",
        label: "What we often fix",
        heading: "Common ad account mistakes we fix",
        items: [
          "No conversion tracking, so nobody knows which ads bring in enquiries",
          "Ads sending everyone to the home page instead of a matching landing page",
          "Locations set too wide, paying for clicks outside your service area",
          "Search terms nobody checked, wasting spend on irrelevant searches",
          "One ad running for months without anything new being tested",
        ],
      },
    ],
  },

  "content-creation": {
    stairsHeading: "How we create content that gets you chosen",
    stairsIntro: "Every piece starts with a real customer question and ends with a clear next step.",
    stairs: [
      { title: "Gather the questions", text: "We collect what your customers ask, search for and worry about before buying.", icon: "chat" },
      { title: "Learn your voice", text: "We talk with you so the content sounds like your business, not a template.", icon: "users" },
      { title: "Plan the calendar", text: "We rank ideas by what's most likely to bring in enquiries, and set a schedule.", icon: "calendar" },
      { title: "Write, shoot, design", text: "We create the words, photos, videos and graphics, then send them for approval.", icon: "pen" },
      { title: "Publish and share", text: "We publish each piece ready for search, and adapt it for social and email.", icon: "link" },
      { title: "Measure and repeat", text: "We see which pieces bring in enquiries, and plan the next round around them.", icon: "chart" },
    ],
    sections: [
      {
        kind: "compare",
        label: "Myths and facts",
        heading: "What people get wrong about content",
        left: {
          title: "Myth",
          items: [
            "More content is always better",
            "Content is just for SEO",
            "You need to post something every day",
            "Anyone can write it, it's just words",
          ],
        },
        right: {
          title: "Fact",
          items: [
            "A few useful pieces beat a pile of filler",
            "Good content also helps people decide to call you",
            "A pace you can keep up beats a burst that stops",
            "Content works when it sounds like you and knows your customers",
          ],
        },
      },
      {
        kind: "cards",
        label: "Working together",
        heading: "What we need from you",
        intro: "We do the heavy lifting, but the best content has a little of you in it.",
        items: [
          { title: "A conversation to start", text: "A chat about your business, your customers and what makes you different gives us the raw material." },
          { title: "The questions you hear", text: "Tell us what customers ask on the phone or in person. Those questions often make the best content." },
          { title: "Access for shoots", text: "For photos and videos, we'll need a time to visit your workplace, team or projects." },
          { title: "Quick approvals", text: "We send everything for your review before it goes live, so you always have the final say." },
        ],
      },
      {
        kind: "checklist",
        label: "Our standard",
        heading: "What every piece is checked for before it goes live",
        items: [
          "It answers a question your customers actually ask",
          "It sounds like your business, not a generic template",
          "It's accurate about your services and the areas you cover",
          "It's set up to be found in search",
          "It ends with a clear next step for the reader",
        ],
      },
    ],
  },

  "social-media": {
    stairsHeading: "How we keep your social media consistent",
    stairsIntro: "A steady rhythm, built around what your local customers care about.",
    stairs: [
      { title: "Review your accounts", text: "We look at what you've posted, what's worked and how your profiles come across.", icon: "eye" },
      { title: "Choose the platforms", text: "We pick the platforms your customers use, so your effort isn't spread too thin.", icon: "target" },
      { title: "Set the themes", text: "We agree content themes and a posting rhythm you can stick with.", icon: "list" },
      { title: "Create and schedule", text: "We create posts in your voice and schedule them ahead, ready for your approval.", icon: "calendar" },
      { title: "Manage the community", text: "We keep an eye on comments and messages, so people aren't left waiting.", icon: "chat" },
      { title: "Review and refine", text: "Each month we look at engagement and enquiries, and adjust the plan.", icon: "refresh" },
    ],
    sections: [
      {
        kind: "checklist",
        label: "Signs you need a hand",
        heading: "Is your social media holding you back?",
        items: [
          "Your last post was weeks or months ago",
          "You post when you remember, then go quiet again",
          "Comments and messages sit unanswered for days",
          "Your posts get likes but never lead to an enquiry",
          "Your profiles have old details, hours or photos",
          "You're on every platform but doing none of them well",
        ],
      },
      {
        kind: "cards",
        label: "A typical month",
        heading: "What a month with us looks like",
        items: [
          { title: "Planning", text: "We map out the month's posts around your themes, seasons and anything happening in your business." },
          { title: "Creating", text: "We create the posts and captions, then send them to you to approve before anything is scheduled." },
          { title: "Posting and replying", text: "Posts go out on schedule, and we keep on top of comments and messages as they come in." },
          { title: "Reviewing", text: "At the end of the month we report on what got attention and enquiries, and what we'll change next." },
        ],
      },
      {
        kind: "faq",
        label: "Good to know",
        heading: "Social media questions, answered",
        items: [
          { q: "Do I need to be on every platform?", a: "No. It's better to do one or two platforms well than to spread yourself thin. We'll recommend the ones your customers actually use." },
          { q: "Will it sound like us?", a: "That's the goal. We learn your voice at the start, and you approve posts before they go out, so nothing feels off-brand." },
          { q: "Do you pay to boost posts?", a: "Only where it earns its keep. Boosting a post to people in nearby suburbs can help the right content reach more locals, and we'll talk it through with you first." },
          { q: "Can you use our own photos and videos?", a: "Yes, and we encourage it. Real photos of your team, work and space build trust in a way stock images can't." },
          { q: "What does social media management cost?", a: "It depends on how many platforms, how often you post and how much content needs creating. We quote after a discovery call, once we know what you need." },
        ],
      },
    ],
  },

  "call-form-tracking": {
    stairsHeading: "How we connect every enquiry to its source",
    stairsIntro: "We set it up, test it properly, then keep it accurate so you can trust the numbers.",
    stairs: [
      { title: "Map every touchpoint", text: "We list every way customers contact you, and every channel sending you traffic.", icon: "map" },
      { title: "Audit current tracking", text: "We check what's already in place, and find what's missing or recording wrongly.", icon: "search" },
      { title: "Install the tracking", text: "We set up call, form and booking tracking with Google Tag Manager and Analytics.", icon: "code" },
      { title: "Connect ad accounts", text: "We link conversions to Google Ads and Meta Ads, so your ads learn what works.", icon: "link" },
      { title: "Test every path", text: "We make test calls, forms and bookings to confirm each one is recorded correctly.", icon: "check" },
      { title: "Report and maintain", text: "We share a simple view of enquiries by source, and check tracking stays accurate.", icon: "chart" },
    ],
    sections: [
      {
        kind: "compare",
        label: "Before and after",
        heading: "Guessing versus knowing",
        left: {
          title: "Without tracking",
          items: [
            "You see website visits, but not who called or enquired",
            "Ad budgets are set on gut feel",
            "Every channel claims credit, and nobody can check",
            "Cutting spend feels risky because you can't see the impact",
          ],
        },
        right: {
          title: "With tracking",
          items: [
            "Every call, form and booking is linked to where it came from",
            "Budget goes where the enquiries are coming from",
            "One clear view of enquiries by source",
            "You can cut what doesn't work with confidence",
          ],
        },
      },
      {
        kind: "cards",
        label: "Why it matters",
        heading: "Decisions good tracking helps you make",
        items: [
          { title: "Where to spend", text: "See which channels bring in enquiries, so you can put more into them and less into the rest." },
          { title: "Which pages to improve", text: "Find the pages people visit but don't enquire from, and fix those first." },
          { title: "Whether your ads pay off", text: "Know which campaigns lead to real calls and forms, not just clicks." },
          { title: "When to change course", text: "Spot a drop in enquiries early, and see where it's coming from." },
        ],
      },
      {
        kind: "faq",
        label: "Common questions",
        heading: "Questions about tracking and reporting",
        items: [
          { q: "We already have Google Analytics. Isn't that enough?", a: "Analytics shows visits, but out of the box it often misses phone calls, form submissions and bookings. We set it up to record the enquiries that matter and link each one to its source." },
          { q: "Will I need to change my phone number?", a: "No. Call tracking usually works by showing a tracking number on your site that forwards to your existing line, so customers still reach you as normal." },
          { q: "Can you fix tracking someone else set up?", a: "Yes. We start with an audit of what's in place, keep what works and fix or replace what doesn't." },
          { q: "Will I understand the reports?", a: "That's the point. You get a simple view of enquiries by source, in plain English, and we go through it with you." },
          { q: "What does tracking cost?", a: "It depends on how many ways customers can contact you, how many channels you use and how much is already in place. We quote after a discovery call." },
        ],
      },
    ],
  },
};
