import type { ServiceMore } from "./types";

// Extra content for the Automation & CRM service pages (see ./types.ts).
export const AUTO: Record<string, ServiceMore> = {
  "crm-setup": {
    stairsHeading: "How we set up your CRM",
    stairsIntro: "Six steps from scattered enquiries to one system your whole team works from.",
    stairs: [
      { title: "Review your process", text: "We look at how enquiries arrive, who picks them up and where they slip.", icon: "search" },
      { title: "Choose the right CRM", text: "We recommend a CRM that suits your size and budget, or keep the one you have.", icon: "target" },
      { title: "Build your pipeline", text: "We set up stages and fields that match the way you actually sell.", icon: "layout" },
      { title: "Import and tidy", text: "We bring in your contacts, merge duplicates and clear out the clutter.", icon: "list" },
      { title: "Connect lead sources", text: "Your website forms and other lead sources feed straight into the CRM.", icon: "link" },
      { title: "Train and refine", text: "We train your team, then fine-tune things after the first few weeks.", icon: "users" },
    ],
    sections: [
      {
        kind: "checklist",
        label: "Before we start",
        heading: "What to have ready",
        intro: "None of this needs to be perfect. Rough is fine, and we'll help fill the gaps.",
        items: [
          "Access to your current CRM, if you have one",
          "Your contacts, wherever they live now: spreadsheets, email or your phone",
          "A list of every place enquiries come from",
          "A rough idea of the steps from first enquiry to paid job",
          "Who on your team handles enquiries, and who follows them up",
        ],
      },
      {
        kind: "compare",
        label: "Day to day",
        heading: "A day in your business, before and after",
        left: {
          title: "Without a CRM",
          items: [
            "Enquiries spread across inboxes, texts and sticky notes",
            "Nobody's sure who replied to whom, or when",
            "Follow-ups depend on someone remembering",
            "Hard to see what work is coming up",
          ],
        },
        right: {
          title: "With a CRM that fits",
          items: [
            "Every enquiry in one list, with its full history",
            "Each lead has an owner and a clear next step",
            "Reminders prompt your team to follow up",
            "Your pipeline shows what's coming at a glance",
          ],
        },
      },
      {
        kind: "faq",
        label: "Questions",
        heading: "Common questions about CRM setup",
        items: [
          {
            q: "Do I need a new CRM, or can you fix the one I have?",
            a: "Often the one you have is fine, it just needs a better setup. We'll tell you honestly after the review, and only suggest a switch if it will genuinely help.",
          },
          {
            q: "What happens to my existing contacts?",
            a: "We import them, tidy up duplicates and gaps, and check everything has landed in the right place before you start using it.",
          },
          {
            q: "How do you make sure my team actually uses it?",
            a: "We keep it simple, build it around how your team already works, and train them on it. After the first few weeks we check in and adjust anything that's getting in the way.",
          },
          {
            q: "Who owns the data?",
            a: "Your contacts and records belong to your business. We set up accounts in your business's name wherever we can, so you always keep access.",
          },
          {
            q: "How much does it cost?",
            a: "It depends on how many lead sources you have, how much data needs tidying and whether you're switching systems. We'll give you a quote after a discovery call.",
          },
        ],
      },
    ],
  },

  "lead-capture": {
    stairsHeading: "How we set up lead capture and follow-up",
    stairsIntro: "We trace every way a lead can reach you, then make sure each one lands, gets noticed and hears back.",
    stairs: [
      { title: "List every source", text: "We find every place enquiries come from: forms, ads, social and more.", icon: "search" },
      { title: "Map each path", text: "We trace what happens to each enquiry now, and where it stalls.", icon: "map" },
      { title: "Connect to your CRM", text: "Each source feeds your CRM, with the lead's details and source recorded.", icon: "link" },
      { title: "Set up alerts", text: "The right person is told the moment a new lead arrives.", icon: "bolt" },
      { title: "Start the follow-up", text: "Automatic emails or texts let every lead know you've got their message.", icon: "mail" },
      { title: "Test and monitor", text: "We test every path end to end, and keep watching after launch.", icon: "eye" },
    ],
    sections: [
      {
        kind: "checklist",
        label: "Signs",
        heading: "Signs your leads are slipping through",
        intro: "If a few of these sound familiar, this service is a good fit.",
        items: [
          "You find enquiries days later, in a spam folder or an old message",
          "You can't say which ad or page brought in your last few jobs",
          "The same customer is in your system two or three times",
          "New leads wait until someone is back at their desk",
          "Whoever sees a message first deals with it, or nobody does",
        ],
      },
      {
        kind: "cards",
        label: "The personal touch",
        heading: "Automated, but still personal",
        intro: "Fast follow-up shouldn't feel like talking to a machine.",
        items: [
          {
            title: "Written in your voice",
            text: "We write every automatic message to sound like you, using the details the lead has given you.",
          },
          {
            title: "A person still follows up",
            text: "The automatic reply buys you time. Your team picks up the conversation from there.",
          },
          {
            title: "Matched to where they came from",
            text: "Someone who asked for a quote gets a different reply from someone who messaged you on social media.",
          },
          {
            title: "Knowing when to stop",
            text: "Automatic follow-up stops once a lead replies or books, so nobody is chased after they've answered.",
          },
        ],
      },
    ],
  },

  "booking-reminders": {
    stairsHeading: "How we automate your bookings and reviews",
    stairsIntro: "From the moment someone books to the review request afterwards, each message is planned, written and tested.",
    stairs: [
      { title: "Review your bookings", text: "We look at how bookings come in, and where no-shows or double handling happen.", icon: "search" },
      { title: "Plan the timing", text: "We decide when each confirmation, reminder and review request goes out.", icon: "calendar" },
      { title: "Write the messages", text: "We write short, friendly messages that sound like you.", icon: "pen" },
      { title: "Connect your system", text: "We link the messages to your booking system or calendar.", icon: "link" },
      { title: "Test every message", text: "We run test bookings, changes and cancellations to check each one.", icon: "check" },
      { title: "Fine-tune over time", text: "We watch no-shows and reschedules, and adjust the timing and wording.", icon: "refresh" },
    ],
    sections: [
      {
        kind: "compare",
        label: "Getting it right",
        heading: "Reminders people read, not ignore",
        left: {
          title: "Reminders that get ignored",
          items: [
            "Long messages with the key details buried",
            "Sent at an odd time, or far too early",
            "No easy way to reschedule, so people just don't turn up",
            "Generic wording that could be from anyone",
          ],
        },
        right: {
          title: "Reminders that work",
          items: [
            "Time, place and what to bring, right up front",
            "Timed to suit your appointments and your customers",
            "A simple link to reschedule or cancel",
            "Your name and your tone, so it feels familiar",
          ],
        },
      },
      {
        kind: "faq",
        label: "Questions",
        heading: "Questions about booking automation",
        items: [
          {
            q: "Will it work with my booking system?",
            a: "We check this first, as part of the review. If your system can't connect directly, we'll talk you through the options before anything is built.",
          },
          {
            q: "Should reminders go by email or SMS?",
            a: "It depends on your customers and the type of appointment. Often a mix works well, such as an email confirmation and a text reminder closer to the day.",
          },
          {
            q: "When is the review request sent?",
            a: "Shortly after the appointment, while the visit is still fresh. We set the exact timing with you, based on the kind of work you do.",
          },
          {
            q: "What if a customer doesn't want the messages?",
            a: "We include a simple way to opt out, and your team can switch messages off for any customer who asks.",
          },
          {
            q: "Can my team still message customers personally?",
            a: "Of course. The automation handles the routine messages, so your team has more time for the conversations that need a person.",
          },
        ],
      },
    ],
  },

  automation: {
    stairsHeading: "How we automate your workflows",
    stairsIntro: "We start with the jobs that cost you the most time, then build, test and improve in small steps.",
    stairs: [
      { title: "Map your process", text: "We map how work moves from first enquiry to finished job.", icon: "map" },
      { title: "Spot the repeats", text: "We find the tasks your team does over and over by hand.", icon: "search" },
      { title: "Pick what goes first", text: "We start with what saves the most time or catches the most leads.", icon: "target" },
      { title: "Build and test", text: "We set up each automation across your tools and test it with real scenarios.", icon: "bolt" },
      { title: "Show your team", text: "We walk your team through what runs on its own, and what still needs them.", icon: "users" },
      { title: "Review and improve", text: "We check response times and results, and refine what's running.", icon: "chart" },
    ],
    sections: [
      {
        kind: "cards",
        label: "Where we start",
        heading: "What we usually automate first",
        intro: "Every business is different, but these are often the quickest wins.",
        items: [
          {
            title: "The first reply",
            text: "A new enquiry gets an instant acknowledgement, so people know you've seen it, even when you're out on a job.",
          },
          {
            title: "Handoffs between people",
            text: "When a lead or job moves to someone else, they're told straight away, with the details they need.",
          },
          {
            title: "Quotes that go quiet",
            text: "A gentle nudge goes out when a quote hasn't had a reply, so good work isn't lost in a busy inbox.",
          },
          {
            title: "Tasks nobody owns",
            text: "When something is overdue, a reminder lands with the right person, instead of relying on memory.",
          },
        ],
      },
      {
        kind: "compare",
        label: "Finding the balance",
        heading: "What to automate, and what to keep human",
        tone: "options",
        left: {
          title: "Good jobs for automation",
          items: [
            "Acknowledging new enquiries straight away",
            "Sending confirmations and reminders",
            "Moving details from one tool to another",
            "Nudging your team when something is overdue",
          ],
        },
        right: {
          title: "Best left to people",
          items: [
            "Answering tricky or unusual questions",
            "Quoting complex jobs",
            "Handling complaints and sensitive conversations",
            "Building relationships with your regular customers",
          ],
        },
      },
    ],
  },

  "connecting-tools": {
    stairsHeading: "How we connect your tools",
    stairsIntro: "One connection at a time, starting with the biggest time savers, so you see the benefit early.",
    stairs: [
      { title: "List your tools", text: "We list every tool you use, from your website to your phone system.", icon: "list" },
      { title: "Map the flow", text: "We trace how information moves between them, and where it's typed in twice.", icon: "map" },
      { title: "Plan the connections", text: "We pick the connections that will save the most time, and do those first.", icon: "target" },
      { title: "Build and test", text: "We build each connection and test it with real examples before it goes live.", icon: "link" },
      { title: "Document it", text: "You get a simple guide to what's connected and how it works.", icon: "file" },
      { title: "Monitor and adjust", text: "We keep an eye on each connection, and adjust it as your business changes.", icon: "shield" },
    ],
    sections: [
      {
        kind: "cards",
        label: "Examples",
        heading: "Connections that remove double handling",
        intro: "Here's what connected tools can look like in practice.",
        items: [
          {
            title: "Website form to CRM",
            text: "A new enquiry creates a contact automatically, with the details and the source already filled in.",
          },
          {
            title: "Booking to calendar",
            text: "A new booking appears in the right person's calendar, such as Google Calendar, without anyone copying it across.",
          },
          {
            title: "Won job to invoicing",
            text: "When a job is marked as won, the details can flow to your accounting software, such as Xero, ready to invoice.",
          },
          {
            title: "Missed call to follow-up",
            text: "A missed call creates a task or a text, so someone always calls back.",
          },
        ],
      },
      {
        kind: "checklist",
        label: "Your data",
        heading: "Data and privacy, in plain words",
        intro: "Connecting tools means customer details move between them. Here's how we keep that sensible.",
        items: [
          "Each tool only receives the details it needs",
          "Accounts stay in your business's name wherever possible",
          "We ask for our own user access where a tool allows it, rather than your password",
          "We keep a record of every connection and what it moves",
          "Connections can be switched off cleanly if you stop using a tool",
        ],
      },
      {
        kind: "faq",
        label: "Questions",
        heading: "Common questions about connecting tools",
        items: [
          {
            q: "What if two of my tools can't connect directly?",
            a: "There's often a way through, such as a connector tool that sits between them. If there isn't a sensible option, we'll tell you and suggest an alternative.",
          },
          {
            q: "Do I have to replace any of my tools?",
            a: "Usually not. We start with the tools you already use, and only suggest a change if one is genuinely holding you back.",
          },
          {
            q: "What happens if a connection breaks?",
            a: "We monitor connections after launch so we can spot problems and fix them. Your guide also shows what each connection does, so it's clear what's affected.",
          },
          {
            q: "Can I add more tools later?",
            a: "Yes. We plan the connections so new tools can be added as your business grows.",
          },
        ],
      },
    ],
  },
};
