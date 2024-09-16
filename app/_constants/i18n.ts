export type TLocale = (typeof LOCALES)[number];

export const LOCALES = ["de", "en", "es", "fr", "pt"] as const;

export const DEFAULT_LOCALE = LOCALES[1];

export const COOKIE_NAME = "NEXT_LOCALE";
