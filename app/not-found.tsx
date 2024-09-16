import { cookies } from "next/headers";
import { Sora } from "next/font/google";

import { COOKIE_NAME } from "@/constants/i18n";

import { Message } from "@/components/pages/not-found";

import "@/styles/variables.css";
import "@/styles/global.css";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "700"] });

function NotFound() {
  const locale = cookies().get(COOKIE_NAME)?.value;

  return (
    <html lang={locale}>
      <body className={sora.className}>
        <main>
          <Message locale={locale!} />
        </main>
      </body>
    </html>
  );
}

export default NotFound;
