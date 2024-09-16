import en from "./translations/en.json";

type TMessages = typeof en;

declare global {
  interface IntlMessages extends TMessages {}
}
