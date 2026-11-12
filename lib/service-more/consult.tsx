import type { ServiceMore } from "./types";

// Extra content for the Strategy & Consulting service pages (see ./types.ts).
export const CONSULT: Record<string, ServiceMore> = {
  "digital-strategy": {
    stairsHeading: "How we build your digital plan",
    stairsIntro: "Six steps from a first conversation to a plan your team can start on.",
    stairs: [
      { title: "Talk goals", text: "We talk through your goals, your customers and what you've tried so far.", icon: "chat" },
      { title: "Gather the numbers", text: "We pull together your website, marketing and sales results to see what's working.", icon: "chart" },
      { title: "Size up competitors", text: "We look at your competitors and how customers find businesses like yours.", icon: "search" },
      { title: "Rank the priorities", text: "We weigh each option by effort and likely impact, then put them in order.", icon: "target" },
      { title: "Build the roadmap", text: "We set out timing, budget and the measures that will show it's working.", icon: "map" },
      { title: "Walk it through", text: "We take you and your team through the plan and agree the first steps.", icon: "users" },
    ],
    sections: [
      {
        kind: "checklist",
        label: "Signs it's time",
        heading: "Signs your business needs a digital plan",
        items: [
          "You're spending on marketing but can't say what it brings in",
          "New ideas and tools get started, but few get finished",
          "Your website, ads and systems were set up at different times by different people",
          "You know you should do more online but aren't sure where to start",
          "Your team is busy, but no one is sure what matters most",
        ],
      },
      {
        kind: "compare",
        label: "Why plan",
        heading: "Guesswork vs a plan",
        left: {
          title: "Without a plan",
          items: [
            "Money goes to whatever feels urgent this month",
            "Ideas pile up with no order to tackle them",
            "It's hard to tell what's working, so nothing gets cut",
            "Each tool or channel is chosen on its own",
          ],
        },
        right: {
          title: "With a plan",
          items: [
            "Budget goes to the few things that matter most",
            "A clear order, with timing you can plan around",
            "Agreed measures that show what's working",
            "Website, marketing and systems pull in the same direction",
          ],
        },
      },
      {
        kind: "faq",
        label: "Good to know",
        heading: "Questions about your digital plan",
        items: [
          {
            q: "Do we have to use you to carry out the plan?",
            a: "No. The plan is yours to run yourself, with your own team or other suppliers. If you'd like help delivering some or all of it, we can do that too.",
          },
          {
            q: "Is it just a marketing plan?",
            a: "No. It covers your website, marketing and the systems behind them, because each one affects the others. We focus on the parts that will make the biggest difference.",
          },
          {
            q: "We're a small business. Is this overkill?",
            a: "Not when it's sized to fit. A plan for a small team should be short, practical and focused on a few priorities you can actually get through.",
          },
          {
            q: "What if things change after the plan is done?",
            a: "Priorities shift, and a good plan allows for that. Because it sets out the reasons behind each priority and the measures to watch, you can adjust it without starting again.",
          },
          {
            q: "How much does it cost?",
            a: "It depends on the size of your business, how many channels and systems are involved and how much research is needed. We talk it through on a discovery call, then send you a quote.",
          },
        ],
      },
    ],
  },

  audits: {
    stairsHeading: "How your audit comes together",
    stairsIntro: "We check the foundations first, then work through each channel and rank what to fix.",
    stairs: [
      { title: "Agree the scope", text: "We agree which channels to review and what you most want answered.", icon: "list" },
      { title: "Get read-only access", text: "You share read-only access to your website, ads and analytics.", icon: "shield" },
      { title: "Check the tracking", text: "We make sure your numbers can be trusted before drawing conclusions.", icon: "eye" },
      { title: "Review each channel", text: "We go through each channel and compare it with your main competitors.", icon: "search" },
      { title: "Write it up", text: "We set out what's working and what isn't, in plain English.", icon: "file" },
      { title: "Rank the fixes", text: "We walk you through the findings and put the fixes in order.", icon: "check" },
    ],
    sections: [
      {
        kind: "cards",
        label: "What you'll learn",
        heading: "Questions an audit answers",
        items: [
          {
            title: "Is my website losing enquiries?",
            text: "We look at how quickly pages load, how they work on a phone and whether it's clear what to do next.",
          },
          {
            title: "Is my ad spend paying off?",
            text: "We check what your spend, targeting and results really add up to.",
          },
          {
            title: "Can I trust my numbers?",
            text: "We check your tracking, so you know whether the figures in your reports are real.",
          },
          {
            title: "How do I compare?",
            text: "We look at your main competitors to see where you're ahead and where you're behind.",
          },
        ],
      },
      {
        kind: "checklist",
        label: "Before we start",
        heading: "What to have ready for your audit",
        intro: "You don't need everything on this list. The more we can see, the more useful the findings.",
        items: [
          "Read-only access to your website analytics",
          "Read-only access to any ad accounts you run",
          "Access to your local listings, such as your Google Business Profile",
          "Your main goals, and the enquiries or sales you want more of",
          "The names of your main competitors",
          "Any past reports, or results you've been told about",
        ],
      },
      {
        kind: "faq",
        label: "Audit questions",
        heading: "What to expect from an audit",
        items: [
          {
            q: "Will you change anything while you look?",
            a: "No. We ask for read-only access and don't make changes during the audit. Any fixes happen afterwards, once you've agreed what to do.",
          },
          {
            q: "Our website was built by someone else. Is that a problem?",
            a: "Not at all. We review what's there, whoever built it, and write the findings so you can share them with your current developer or marketer.",
          },
          {
            q: "How is this different from a free online report?",
            a: "Automated tools flag technical issues, but they can't tell you which ones matter for your business. We look at the whole picture and rank fixes by what will make the biggest difference.",
          },
          {
            q: "What if you find nothing wrong?",
            a: "Then you'll have it confirmed in writing and can keep spending with confidence. We'll still point out anything worth tightening.",
          },
        ],
      },
    ],
  },

  "software-selection": {
    stairsHeading: "How we help you choose the right tool",
    stairsIntro: "We start with how your team works, not with a sales demo.",
    stairs: [
      { title: "Hear from users", text: "We talk to the people who'll use the tool day to day.", icon: "users" },
      { title: "List the must-haves", text: "We agree what the tool has to do, and what's just nice to have.", icon: "list" },
      { title: "Check what you have", text: "We review your current tools and subscriptions, and what they connect to.", icon: "settings" },
      { title: "Build a shortlist", text: "We narrow the options to the few that suit your size and budget.", icon: "search" },
      { title: "Compare full costs", text: "We put features, fit, setup and ongoing fees side by side.", icon: "chart" },
      { title: "Recommend and plan", text: "We recommend one, explain why, and plan the setup and data move.", icon: "check" },
    ],
    sections: [
      {
        kind: "compare",
        label: "A better way to choose",
        heading: "Choosing from demos vs choosing from your needs",
        left: {
          title: "Choosing from demos",
          items: [
            "Features look great in a sales pitch",
            "You see the advertised price, not the full cost",
            "Picked by one person, used by everyone",
            "Fit with your other tools is found out later",
          ],
        },
        right: {
          title: "Choosing from your needs",
          items: [
            "Features checked against what your team really does",
            "Setup, ongoing fees and add-ons counted up front",
            "The people who'll use it have a say",
            "Connections to your current tools checked first",
          ],
        },
      },
      {
        kind: "cards",
        label: "What we watch for",
        heading: "Red flags we look for in software",
        items: [
          {
            title: "Paying for features you won't use",
            text: "Bigger plans often bundle tools you'll never touch. We check which level you really need.",
          },
          {
            title: "Data that's hard to get out",
            text: "If moving your data later is slow or costly, you're locked in. We check how easily it can be exported.",
          },
          {
            title: "Costs that creep up",
            text: "Per-user fees, add-ons and renewal prices can add up. We look at what it will cost as you grow.",
          },
          {
            title: "Tools that don't connect",
            text: "A tool that can't talk to your website, calendar or email creates double handling. We check before you commit.",
          },
        ],
      },
      {
        kind: "faq",
        label: "Common questions",
        heading: "Questions about our recommendation",
        items: [
          {
            q: "Do we have to buy what you recommend?",
            a: "No. The decision is always yours. We give you the comparison and our reasons, so you can choose with confidence.",
          },
          {
            q: "We already have a tool in mind. Can you still help?",
            a: "Yes. We'll check it against what you need and compare it with one or two realistic alternatives, so you know whether it's the right call.",
          },
          {
            q: "Will you tell us to replace everything?",
            a: "Not unless it's needed. Sometimes the best answer is to use your current tools better, and we'll say so.",
          },
          {
            q: "Can you set it up once we've chosen?",
            a: "Yes, if you'd like. We can set it up, connect it to your other tools and help move your data across.",
          },
        ],
      },
    ],
  },

  "process-reviews": {
    stairsHeading: "How we review the way work gets done",
    stairsIntro: "We follow real work through your business, then show you what to change first.",
    stairs: [
      { title: "Pick the processes", text: "We agree which processes matter most, such as enquiries, bookings or jobs.", icon: "target" },
      { title: "Talk to the team", text: "We sit down with the people doing the work to hear how it really happens.", icon: "chat" },
      { title: "Map it out", text: "We lay out each process from enquiry to finished job, workarounds included.", icon: "map" },
      { title: "Find the gaps", text: "We pinpoint double handling, slow handovers and enquiries that go missing.", icon: "search" },
      { title: "Rank the changes", text: "We rank what to simplify, change or automate by time saved and effort.", icon: "list" },
      { title: "Plan the next steps", text: "We set out the changes in order, with what each one will take.", icon: "calendar" },
    ],
    sections: [
      {
        kind: "cards",
        label: "Your deliverables",
        heading: "What you walk away with",
        intro: "Plain, practical outputs your team can pick up and use.",
        items: [
          {
            title: "Process maps",
            text: "Simple diagrams of how enquiries, bookings and jobs move through your business today.",
          },
          {
            title: "A list of what's slowing you down",
            text: "Each bottleneck, double handling and gap we found, explained in plain English.",
          },
          {
            title: "Ranked recommendations",
            text: "What to simplify, change or automate, in order of time saved and effort needed.",
          },
          {
            title: "A plan for the changes",
            text: "Clear next steps, so you know what to tackle first and what it will take.",
          },
        ],
      },
      {
        kind: "compare",
        label: "Why it matters",
        heading: "Patching problems vs fixing the process",
        left: {
          title: "Patching problems",
          items: [
            "A new workaround each time something slips",
            "Another tool bought to cover a gap",
            "Jobs that rely on one person remembering",
            "The same problems keep coming back",
          ],
        },
        right: {
          title: "Fixing the process",
          items: [
            "Find where and why things slip",
            "Simplify first, then automate what's left",
            "Clear steps anyone on the team can follow",
            "Fix the cause once, in the right place",
          ],
        },
      },
      {
        kind: "checklist",
        label: "From your side",
        heading: "How your team takes part",
        intro: "A little time from the right people makes the review far more accurate.",
        items: [
          "Time with the people who handle enquiries, bookings and jobs",
          "A few real examples, followed from first contact to finish",
          "A list of the tools, forms and spreadsheets you use",
          "Honest answers about the workarounds, even the messy ones",
          "One person to help arrange times and answer quick questions",
        ],
      },
    ],
  },

  "location-strategy": {
    stairsHeading: "How we find your best areas",
    stairsIntro: "We start with the decision you're facing and work through the data to a clear recommendation.",
    stairs: [
      { title: "Define the question", text: "We learn about your business and the decision you're facing.", icon: "chat" },
      { title: "Profile your customers", text: "We work out who your best-fit customers are and where they come from.", icon: "users" },
      { title: "Research the areas", text: "We look at demographics, local demand, search behaviour and area trends.", icon: "search" },
      { title: "Map the competition", text: "We plot nearby competitors and spot the gaps they leave open.", icon: "map" },
      { title: "Compare and rank", text: "We compare suburbs or areas side by side and rank the opportunities.", icon: "chart" },
      { title: "Plan the marketing", text: "We recommend where to focus and the marketing to build around it.", icon: "target" },
    ],
    sections: [
      {
        kind: "checklist",
        label: "Common traps",
        heading: "Location mistakes we help you avoid",
        intro: "Each of these is easy to make on gut feel, and costly to undo once you've committed.",
        items: [
          "Choosing a site mainly because the rent is low",
          "Following a competitor into an area that's already crowded",
          "Judging an area on foot traffic from a single visit",
          "Assuming customers will travel further than they really will",
          "Advertising across a whole city when demand sits in a few suburbs",
          "Building your marketing before you know who you're targeting",
        ],
      },
      {
        kind: "faq",
        label: "Questions",
        heading: "Location strategy questions, answered",
        items: [
          {
            q: "Is this only for businesses opening new premises?",
            a: "No. It's just as useful if you're staying put and want to know which nearby areas to target with your marketing.",
          },
          {
            q: "Will you tell us exactly which site to lease?",
            a: "We recommend the areas with the strongest opportunity and explain why. Choosing a specific property and agreeing the lease is still your call, ideally with your property and legal advisers.",
          },
          {
            q: "How is the free snapshot different from the full strategy?",
            a: "The snapshot is a focused look at your local market and where to start. The full strategy goes further, comparing suburbs or areas side by side and building marketing recommendations around the findings.",
          },
          {
            q: "Do we need to use you for the marketing afterwards?",
            a: "No. The findings are yours to use however you like. If you'd like help, we can build the local SEO, suburb pages and ads around them.",
          },
          {
            q: "How much does it cost?",
            a: "It depends on how many areas you're weighing up and how much research the decision needs. We talk it through on a strategy call, then send you a quote.",
          },
        ],
      },
    ],
  },
};
