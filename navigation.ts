import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { LOCALES } from "@/constants/i18n";

export const { Link, usePathname } = createSharedPathnamesNavigation({
  locales: LOCALES,
});
