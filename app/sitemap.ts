import { MetadataRoute } from "next";

import { LOCALES, DEFAULT_LOCALE } from "@/constants/i18n";
import { BASE_URL } from "@/constants/website";

function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/${DEFAULT_LOCALE}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((locale) => [locale, `${BASE_URL}/${locale}`])
        ),
      },
    },
  ];
}

export default sitemap;
