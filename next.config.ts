import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // each page's stylesheets load as they are imported, in that order, and aren't merged with other pages' CSS
  experimental: { cssChunking: "strict" },

  // the live site's pages that this version folds into the homepage
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: false },
      { source: "/examples", destination: "/#work", permanent: false },
      // the four service categories no longer have pages of their own
      { source: "/services/:group(web-design-and-development|digital-marketing|automation-and-crm|strategy-and-consulting)", destination: "/#services", permanent: false },
    ];
  },
};

export default nextConfig;
