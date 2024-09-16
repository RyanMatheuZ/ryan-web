import { notFound } from "next/navigation";

import { getRequestConfig } from "next-intl/server";

import { LOCALES, type TLocale } from "@/constants/i18n";

export default getRequestConfig(async ({ locale }) => {
  if (!LOCALES.includes(locale as TLocale)) notFound();

  return {
    messages: (await import(`./translations/${locale}.json`)).default,
  };
});
