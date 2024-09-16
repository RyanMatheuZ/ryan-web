import type { TLocale } from "@/constants/i18n";

interface TLanguage {
  name: string;
  iconName: string;
  localeCode: TLocale;
}

export const languages: TLanguage[] = [
  {
    name: "Deutsch",
    iconName: "germany",
    localeCode: "de",
  },
  {
    name: "English",
    iconName: "united-states-of-america",
    localeCode: "en",
  },
  {
    name: "Español",
    iconName: "spain",
    localeCode: "es",
  },
  {
    name: "Français",
    iconName: "france",
    localeCode: "fr",
  },
  {
    name: "Português",
    iconName: "brazil",
    localeCode: "pt",
  },
];
