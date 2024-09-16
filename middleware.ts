import createMiddleware from "next-intl/middleware";

import { LOCALES, DEFAULT_LOCALE } from "@/constants/i18n";

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: true,
});

export const config = {
  matcher: ["/", "/(de|en|es|fr|pt)/:path*"],
};
