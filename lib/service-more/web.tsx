import type { ServiceMore } from "./types";

// Extra content for the Web Design & Development service pages (see ./types.ts).
export const WEB: Record<string, ServiceMore> = {
  "website-design": {
    stairsHeading: "How we design and build your website",
    stairsIntro: "Six clear steps, with your input at each one, so you always know what comes next.",
    stairs: [
      { title: "Discover", text: "We learn about your business, your customers and what your current site does now.", icon: "chat" },
      { title: "Map the pages", text: "We plan every page and the path from first visit to enquiry.", icon: "map" },
      { title: "Design mobile first", text: "We design the key pages in your brand and refine them with you.", icon: "layout" },
      { title: "Build and test", text: "We build a fast, search-friendly site and test it on real devices.", icon: "code" },
      { title: "Launch and hand over", text: "We go live, connect call and form tracking, and show you how it all works.", icon: "rocket" },
      { title: "Keep it current", text: "Ongoing maintenance keeps your site fast, secure and up to date after launch.", icon: "refresh" },
    ],
    sections: [
      {
        kind: "checklist",
        label: "Is it time?",
        heading: "Signs your website is costing you enquiries",
        intro: "If a few of these sound familiar, a new website is usually worth a conversation.",
        items: [
          "Visitors land on your site but rarely call or fill in a form",
          "It's hard to read or use on a phone",
          "You'd rather not send people to it",
          "It doesn't say clearly what you do, who for and where",
          "Updating a page means waiting on someone else",
          "You can't tell which enquiries came from the site",
        ],
      },
      {
        kind: "cards",
        label: "Before you start",
        heading: "What we'll need from you",
        intro: "You don't need everything sorted. These simply help us move quickly.",
        items: [
          {
            title: "Your brand",
            text: "Your logo, colours and fonts, or whatever you have. If you don't have them yet, tell us and we'll talk through options.",
          },
          {
            title: "Why customers choose you",
            text: "What makes you different, in your own words. We'll draw this out with you in the discovery call.",
          },
          {
            title: "Real photos",
            text: "Photos of your team, work or premises build trust faster than stock images. We'll tell you which shots matter most.",
          },
          {
            title: "Your current setup",
            text: "Where your domain and current site are hosted, so we can plan the move without anything going missing.",
          },
        ],
      },
      {
        kind: "faq",
        label: "Common questions",
        heading: "Questions about a new website",
        items: [
          {
            q: "How much does a new website cost?",
            a: "It depends on how many pages you need, the features involved and how much content we're creating. We'll give you a clear quote after a discovery call, once we understand what the site needs to do.",
          },
          {
            q: "How long does it take?",
            a: "It depends on the size of the site and how quickly content and feedback come together. We'll map out a timeline with you at the start so you know what to expect.",
          },
          {
            q: "Will I be able to update it myself?",
            a: "Yes. We build on a platform you can edit, and at handover we walk you through everyday changes like text and images.",
          },
          {
            q: "Do I need to write all the words?",
            a: "No. We plan the messaging and outline each page with you, so you're never starting from a blank page.",
          },
          {
            q: "What happens to my current site?",
            a: "We plan the move carefully, including redirects from old pages, so visitors and search engines can find the new ones.",
          },
        ],
      },
    ],
  },

  ecommerce: {
    stairsHeading: "How we build your online store",
    stairsIntro: "From your first product list to your first real order, here's how it comes together.",
    stairs: [
      { title: "Understand your range", text: "We look at your products, your customers and how orders are handled today.", icon: "search" },
      { title: "Choose the platform", text: "We recommend the platform that suits your range, budget and day-to-day running.", icon: "settings" },
      { title: "Plan the store", text: "We organise categories, filters and navigation around how people shop.", icon: "map" },
      { title: "Design key pages", text: "We design product, cart and checkout pages in your brand, phone first.", icon: "layout" },
      { title: "Build and load", text: "We set up payments, shipping and tax, and load or move your products.", icon: "cart" },
      { title: "Test and launch", text: "We run real test orders end to end, then launch and show you how it all works.", icon: "rocket" },
    ],
    sections: [
      {
        kind: "compare",
        label: "Choosing a platform",
        heading: "Hosted store or self-managed store?",
        tone: "options",
        left: {
          title: "Hosted platform, like Shopify",
          items: [
            "Hosting, security and platform updates are handled for you",
            "Quick to set up and simple to run day to day",
            "Ongoing monthly fees, plus any paid apps you add",
            "Some limits on deeper customisation",
          ],
        },
        right: {
          title: "Self-managed, like WooCommerce on WordPress",
          items: [
            "You own the site and choose where it's hosted",
            "Sits naturally alongside an existing WordPress site",
            "Very flexible, with extensions for most needs",
            "Updates, security and hosting need regular care",
          ],
        },
      },
      {
        kind: "checklist",
        label: "What buyers look for",
        heading: "What every product page needs",
        intro: "Shoppers can't pick up your product, so the page has to answer their questions for them.",
        items: [
          "Clear photos from more than one angle",
          "Price, options and stock shown up front",
          "Delivery costs and timing before checkout, not during it",
          "A description that answers the questions customers usually ask",
          "Returns information that's easy to find",
          "An add-to-cart button that's easy to reach on a phone",
        ],
      },
      {
        kind: "faq",
        label: "Good to know",
        heading: "Common questions about selling online",
        items: [
          {
            q: "Can you move my products from my current store?",
            a: "Yes. We move your products across and set up redirects, so old product links still lead somewhere useful.",
          },
          {
            q: "Will I be able to add products and manage orders myself?",
            a: "Yes. At handover we show you how to add products, update prices and stock, and process orders, in plain English.",
          },
          {
            q: "Which payment options can customers use?",
            a: "It depends on the platform and payment provider you choose. We'll set up the options that suit your customers and how you like to get paid.",
          },
          {
            q: "What does an online store cost?",
            a: "It depends on the platform, how many products you have, and any custom features or integrations. We'll quote after a discovery call, once we understand your range and how you work.",
          },
          {
            q: "Do you help people find the store after launch?",
            a: "Your store launches with search-friendly pages and sales tracking in place. If you want to grow traffic, our Google Ads, Meta Ads and SEO services pick up from there.",
          },
        ],
      },
    ],
  },

  "ux-ui-design": {
    stairsHeading: "How we shape the experience, step by step",
    stairsIntro: "Each step settles one question before the next, so nothing important is decided by accident.",
    stairs: [
      { title: "Agree the goals", text: "We agree what the site or app must achieve, for you and your customers.", icon: "target" },
      { title: "Research customers", text: "We look at your data and, where we can, talk to customers about what they need.", icon: "users" },
      { title: "Map the journeys", text: "We map the key paths and spot where people get stuck or drop off.", icon: "map" },
      { title: "Wireframe the screens", text: "We sketch each screen's layout so the structure is right before the polish.", icon: "layout" },
      { title: "Design and prototype", text: "We design in your brand and link screens into a prototype you can tap through.", icon: "pen" },
      { title: "Test and hand over", text: "We test with real people, refine what trips them up, and prepare it for the build.", icon: "check" },
    ],
    sections: [
      {
        kind: "cards",
        label: "What we often fix",
        heading: "Small problems that quietly turn people away",
        intro: "Most of these are easy to miss when you know your own business well.",
        items: [
          {
            title: "Too many choices at once",
            text: "When every option competes for attention, people often pick none. We give each screen one clear next step.",
          },
          {
            title: "Forms that ask too much",
            text: "Every extra field is another reason to stop. We keep only what you genuinely need at that point.",
          },
          {
            title: "Labels in your language, not theirs",
            text: "Internal names and jargon make people hunt. We label things the way your customers think about them.",
          },
          {
            title: "Hard to use one-handed",
            text: "Small buttons and cramped layouts frustrate people on phones. We design for thumbs first.",
          },
        ],
      },
      {
        kind: "compare",
        label: "Myths and facts",
        heading: "What UX/UI design is, and what it isn't",
        left: {
          title: "Myth",
          items: [
            "UX is just about making things look nice",
            "Only big apps need it",
            "If you like the design, customers will too",
            "Research takes too long to be worth it",
          ],
        },
        right: {
          title: "Fact",
          items: [
            "It's about what people can find, understand and do",
            "A clear journey matters just as much on a small business site",
            "Watching real people use it shows what you'd never spot yourself",
            "A little research early avoids rework once it's built",
          ],
        },
      },
      {
        kind: "faq",
        label: "Questions",
        heading: "What people ask before starting UX/UI design",
        items: [
          {
            q: "Do I need UX/UI design if I'm already getting a new website?",
            a: "Our website design work already plans structure and messaging. Dedicated UX/UI design suits apps and more complex sites or journeys, where it pays to go deeper on research and testing.",
          },
          {
            q: "Do you need to speak to our customers?",
            a: "It helps, but it isn't essential. Where we can't, we work from your data, your team's knowledge and testing with people who match your customers.",
          },
          {
            q: "Can our own developers build from your designs?",
            a: "Yes. We hand over final designs, a simple design system and notes on how each screen behaves. If you'd rather, we can build it for you too.",
          },
          {
            q: "Do you design apps as well as websites?",
            a: "Yes. The same process works for websites and apps: understand, map, design, then test with real people.",
          },
          {
            q: "How is the cost worked out?",
            a: "It depends on how many screens and journeys are involved, and how much research and testing suits the project. We'll quote after a discovery call, once we understand the scope.",
          },
        ],
      },
    ],
  },

  conversion: {
    stairsHeading: "How we find and fix what's costing you enquiries",
    stairsIntro: "We measure first and change second, so every improvement is based on what your visitors actually do.",
    stairs: [
      { title: "Check the tracking", text: "We make sure calls, forms and bookings are tracked before changing anything.", icon: "chart" },
      { title: "Find the leaks", text: "We review your busiest and most valuable pages, and where visitors drop off.", icon: "search" },
      { title: "Study the journey", text: "We look at how visitors move through each page and where they hesitate.", icon: "eye" },
      { title: "Rank the fixes", text: "We prioritise by likely impact and effort, so the quick wins go first.", icon: "list" },
      { title: "Improve the pages", text: "We rework calls to action, forms, layout and messaging where it counts.", icon: "pen" },
      { title: "Test and keep", text: "We measure each change against real enquiries and keep what wins.", icon: "refresh" },
    ],
    sections: [
      {
        kind: "compare",
        label: "Where to invest",
        heading: "More traffic, or more from the traffic you have?",
        left: {
          title: "Buying more traffic",
          items: [
            "Costs more each month to keep going",
            "Sends more people to the same leaks",
            "Ad results stop when the budget stops",
            "Can hide problems behind bigger numbers",
          ],
        },
        right: {
          title: "Converting more of it",
          items: [
            "Improvements keep working once they're made",
            "Every visitor gets a clearer path to enquire",
            "Makes your ads and SEO budget go further",
            "Shows which pages actually bring in enquiries",
          ],
        },
      },
      {
        kind: "checklist",
        label: "Measuring success",
        heading: "How you'll know it's working",
        intro: "We look at real business outcomes, not just clicks.",
        items: [
          "More calls, forms and bookings from the same amount of traffic",
          "Fewer visitors leaving key pages without acting",
          "Enquiries that are a better fit for what you offer",
          "Clear tracking that shows where each enquiry came from",
          "A regular report on what changed and why",
        ],
      },
      {
        kind: "faq",
        label: "Before we begin",
        heading: "Before you invest in conversion work",
        items: [
          {
            q: "Do I need a new website first?",
            a: "Usually not. Most improvements are made to the pages you already have. If the site itself is holding you back, we'll tell you plainly.",
          },
          {
            q: "How much traffic do I need?",
            a: "Enough that changes show up in real enquiries. If traffic is low, we start with clear, well-established fixes rather than formal tests.",
          },
          {
            q: "How soon will I see a difference?",
            a: "It depends on your traffic and how many fixes are needed. Quick wins go first, and we track every change so you can see what moves.",
          },
          {
            q: "Will you change my branding?",
            a: "No. We work within your brand and change what helps people act: wording, layout, forms and calls to action.",
          },
          {
            q: "How is it priced?",
            a: "It depends on how many pages and journeys are involved, and whether it's a one-off review or ongoing work. We'll quote after a discovery call.",
          },
        ],
      },
    ],
  },

  "website-maintenance": {
    stairsHeading: "How we keep your website in good shape",
    stairsIntro: "It starts with a clear picture of where your site is now, then settles into a steady routine.",
    stairs: [
      { title: "Health check", text: "We review your site, platform and hosting to see what needs attention now.", icon: "search" },
      { title: "Fix urgent items", text: "We sort anything urgent the check turns up, like broken forms or errors.", icon: "bolt" },
      { title: "Agree the plan", text: "We agree what's covered, how often we check in and how to request changes.", icon: "calendar" },
      { title: "Keep it updated", text: "We update software, plugins and security on a regular schedule.", icon: "shield" },
      { title: "Watch and fix", text: "We check for errors, broken links, downtime and slow pages, and fix what we find.", icon: "eye" },
      { title: "Report monthly", text: "Each month you get a simple summary of what we've updated, fixed and changed.", icon: "file" },
    ],
    sections: [
      {
        kind: "cards",
        label: "Why it matters",
        heading: "What can happen when a website is left alone",
        intro: "None of this happens overnight, which is exactly why it's easy to miss.",
        items: [
          {
            title: "Security gaps",
            text: "Out-of-date software and plugins are a common way sites get compromised. Regular updates close those gaps.",
          },
          {
            title: "Things break quietly",
            text: "A form stops sending or a page shows an error, and nobody notices until enquiries dry up.",
          },
          {
            title: "It slows down",
            text: "Sites tend to get slower as content and plugins pile up, and slow pages lose visitors.",
          },
          {
            title: "Content goes stale",
            text: "Old prices, past events and staff who've moved on make a business look less current.",
          },
        ],
      },
      {
        kind: "compare",
        label: "Your options",
        heading: "Looking after it yourself, or leaving it with us",
        left: {
          title: "Doing it yourself",
          items: [
            "Updates happen when you remember, or when something breaks",
            "Problems are often spotted by customers first",
            "Small changes compete with running your business",
            "It's hard to know whether an update is safe to run",
          ],
        },
        right: {
          title: "With our maintenance",
          items: [
            "Updates and checks happen on a regular schedule",
            "We watch for errors and downtime, and fix what we find",
            "You send us small changes and we take care of them",
            "A monthly summary shows what's been done",
          ],
        },
      },
      {
        kind: "checklist",
        label: "Choosing support",
        heading: "Questions to ask any website support provider",
        intro: "Whoever looks after your site, these answers should be clear before you sign up.",
        items: [
          "What exactly is updated, and how often?",
          "How do I request a change, and who does it?",
          "What happens if an update breaks something?",
          "Will I get a regular summary of the work done?",
          "Which changes are included, and which are quoted separately?",
          "Do I keep access to my own site, domain and hosting?",
        ],
      },
    ],
  },
};
