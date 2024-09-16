import { MetadataRoute } from "next";

import { BASE_URL } from "@/constants/website";

function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: BASE_URL,
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

export default robots;
