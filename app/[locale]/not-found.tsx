import { cookies } from "next/headers";

import { COOKIE_NAME } from "@/constants/i18n";

import { Message } from "@/components/pages/not-found";

import "@/styles/variables.css";
import "@/styles/global.css";

function NotFound() {
  const locale = cookies().get(COOKIE_NAME)?.value;

  return <Message locale={locale!} />;
}

export default NotFound;
