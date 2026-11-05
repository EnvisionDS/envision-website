// The wording of the Privacy Policy and the Terms & Conditions (as on the live site, April 2026).
// components/legal/LegalPage.tsx lays them out; "id" is each section's link target in the contents list.
import type { LegalSection } from "@/components/legal/LegalPage";

const CONTACT = (
  <div className="legal-card">
    <p>
      <b>Envision Digital Solutions</b>
    </p>
    <p>Melbourne, Victoria, Australia</p>
    <p>
      Email: <a href="mailto:hello@envisionds.com.au">hello@envisionds.com.au</a>
    </p>
  </div>
);

export const PRIVACY = {
  title: "Privacy Policy",
  updated: "April 2026",
  intro: "How we collect, use, store and protect your information when you visit our website or work with us.",
  description: "How Envision Digital Solutions collects, uses, stores and protects your personal information.",
  sections: [
    {
      id: "about",
      title: "About this policy",
      body: (
        <>
          <p>
            Envision Digital Solutions (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains how we collect, use, store, and disclose information
            when you visit our website or use our services.
          </p>
          <p>By using our website, you agree to the collection and use of information in accordance with this policy.</p>
        </>
      ),
    },
    {
      id: "information",
      title: "Information we may collect",
      body: (
        <>
          <p>We may collect the following types of personal information:</p>
          <ul>
            <li>Your name, email address, and phone number when you submit a contact or enquiry form</li>
            <li>
              Information about your business, including its name, industry, and current marketing situation, when you engage with us
            </li>
            <li>Your email address when you sign up to receive free resources or marketing communications</li>
            <li>
              Usage data such as pages visited, time spent on site, and referring URL, collected through website analytics tools
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "enquiries",
      title: "Contact forms and enquiry submissions",
      body: (
        <p>
          When you complete a contact form, book a strategy call, or submit an enquiry through our website, we collect the information
          you provide in order to respond to your request and provide you with relevant services. This information is used solely to
          communicate with you and assess how we can help your business.
        </p>
      ),
    },
    {
      id: "email",
      title: "Email marketing and resource downloads",
      body: (
        <p>
          If you sign up to receive a free resource, newsletter, or marketing communications from us, we will use your email address to
          send you the requested content and, from time to time, relevant updates or insights. You may unsubscribe at any time by
          clicking the unsubscribe link in any email we send, or by contacting us directly.
        </p>
      ),
    },
    {
      id: "analytics",
      title: "Website analytics and cookies",
      body: (
        <>
          <p>
            Our website may use analytics tools such as Google Analytics or Vercel Analytics to help us understand how visitors use our
            site. These tools may collect information such as your IP address, browser type, device type, pages visited, and time spent
            on site. This information is used in aggregate to improve our website and services.
          </p>
          <p>
            Cookies are small data files stored on your device. You can control cookie settings through your browser. Note that
            disabling cookies may affect some functionality of our website.
          </p>
        </>
      ),
    },
    {
      id: "third-parties",
      title: "Third-party tools and platforms",
      body: (
        <>
          <p>We may use third-party tools and platforms to operate our business and deliver our services. These may include:</p>
          <ul>
            <li>Hosting and infrastructure providers</li>
            <li>Website analytics platforms (such as Google Analytics or Vercel Analytics)</li>
            <li>Email and CRM platforms used to manage communications</li>
            <li>Advertising platforms such as Google Ads and Meta Ads, when running campaigns on behalf of clients</li>
          </ul>
          <p>
            Each of these providers has their own privacy policy. We do not sell or share your personal information with third parties
            for their own marketing purposes.
          </p>
        </>
      ),
    },
    {
      id: "security",
      title: "How we store and protect your information",
      body: (
        <p>
          We take reasonable precautions to protect your personal information from unauthorised access, disclosure, alteration, or
          destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      ),
    },
    {
      id: "access",
      title: "Access, correction, and deletion",
      body: (
        <p>
          You have the right to request access to, correction of, or deletion of your personal information held by us. To make such a
          request, please contact us using the details below. We will respond within a reasonable timeframe and in accordance with
          applicable Australian privacy laws.
        </p>
      ),
    },
    {
      id: "links",
      title: "Links to other websites",
      body: (
        <p>
          Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites
          and encourage you to review their privacy policies independently.
        </p>
      ),
    },
    {
      id: "changes",
      title: "Changes to this policy",
      body: (
        <p>
          We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated date. We
          encourage you to review this page periodically.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact us",
      body: (
        <>
          <p>If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:</p>
          {CONTACT}
        </>
      ),
    },
  ] satisfies LegalSection[],
};

export const TERMS = {
  title: "Terms & Conditions",
  updated: "April 2026",
  intro: "The terms for using the Envision Digital Solutions website. Please read them carefully before using our site.",
  description: "Terms and Conditions for the Envision Digital Solutions website. Please read these terms carefully before using our site.",
  sections: [
    {
      id: "use",
      title: "Use of this website",
      body: (
        <>
          <p>
            By accessing and using the Envision Digital Solutions website (&quot;the website&quot;), you accept and agree to be bound by
            these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use this website.
          </p>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the website after any changes constitutes your
            acceptance of the updated terms.
          </p>
        </>
      ),
    },
    {
      id: "general",
      title: "General information only",
      body: (
        <p>
          The content on this website is provided for general information purposes only. It is not intended to constitute professional
          advice of any kind, including marketing, legal, financial, or business advice. You should seek independent professional advice
          before acting on any information presented on this website.
        </p>
      ),
    },
    {
      id: "outcomes",
      title: "No guarantee of outcomes",
      body: (
        <p>
          Envision Digital Solutions does not guarantee specific outcomes from any digital marketing, SEO, paid advertising, website, or
          business strategy services. Results vary depending on a wide range of factors including market conditions, competition, audience
          behaviour, budget, and execution. Any case studies, examples, or indicative results presented on this website are illustrative
          only and should not be taken as a guarantee of similar results for your business.
        </p>
      ),
    },
    {
      id: "location",
      title: "Location strategy disclaimer",
      body: (
        <p>
          Location Strategy insights, suburb analyses, and market recommendations provided by Envision Digital Solutions are based on
          available data and our professional interpretation at the time of delivery. These insights are recommendations only and should
          not be treated as guaranteed business results, investment advice, or a substitute for independent due diligence. Business
          location decisions carry inherent risk, and we strongly recommend obtaining independent advice before committing to any
          significant business decision.
        </p>
      ),
    },
    {
      id: "ip",
      title: "Intellectual property",
      body: (
        <p>
          All content on this website, including but not limited to text, graphics, logos, images, and page layouts, is the property of
          Envision Digital Solutions or its content suppliers and is protected by applicable intellectual property laws. You may not
          reproduce, distribute, or use any content from this website without our prior written permission.
        </p>
      ),
    },
    {
      id: "links",
      title: "Third-party links",
      body: (
        <p>
          This website may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or
          take responsibility for the content, accuracy, or practices of any third-party websites. Visiting linked websites is done at
          your own risk.
        </p>
      ),
    },
    {
      id: "liability",
      title: "Limitation of liability",
      body: (
        <>
          <p>
            To the fullest extent permitted by law, Envision Digital Solutions shall not be liable for any direct, indirect, incidental,
            consequential, or special damages arising from your use of this website or reliance on any information provided herein. This
            includes, but is not limited to, loss of profits, loss of business, or loss of data.
          </p>
          <p>Nothing in these terms limits any rights you may have under Australian consumer law that cannot be excluded by agreement.</p>
        </>
      ),
    },
    {
      id: "law",
      title: "Governing law",
      body: (
        <p>
          These Terms &amp; Conditions are governed by the laws of Victoria, Australia. Any disputes arising in connection with these terms
          shall be subject to the exclusive jurisdiction of the courts of Victoria.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact us",
      body: (
        <>
          <p>If you have any questions about these Terms &amp; Conditions, please contact us at:</p>
          {CONTACT}
        </>
      ),
    },
  ] satisfies LegalSection[],
};
