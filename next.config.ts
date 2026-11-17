import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // each page's stylesheets load as they are imported, in that order, and aren't merged with other pages' CSS
  experimental: { cssChunking: "strict" },

  // the live site's pages that this version folds into the homepage
  async redirects() {
    return [
      { source: "/examples", destination: "/#work", permanent: false },
      // the four service categories no longer have pages of their own: each goes to its part of the Services page
      { source: "/services/web-design-and-development", destination: "/services#web", permanent: false },
      { source: "/services/digital-marketing", destination: "/services#mkt", permanent: false },
      { source: "/services/automation-and-crm", destination: "/services#auto", permanent: false },
      { source: "/services/strategy-and-consulting", destination: "/services#consult", permanent: false },
    ];
  },
};

export default nextConfig;
