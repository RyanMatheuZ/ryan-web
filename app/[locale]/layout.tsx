import type { PropsWithChildren } from "react";

import type { Metadata } from "next";
import { Sora } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { BASE_URL } from "@/constants/website";

import "@/styles/variables.css";
import "@/styles/global.css";

interface ILocaleLayout extends PropsWithChildren {
  params: {
    locale: string;
  };
}

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  robots: {
    index: true,
    follow: true,
  },
  keywords: "portfolio, tech, software, developer, engineer",
  category: "Portfolio",
  applicationName: "RyanWeb",
  creator: "Ryan",
  authors: {
    name: "Ryan",
    url: "https://www.linkedin.com/in/ryanmatheus",
  },
  generator: "Next.js",
  publisher: "Vercel",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-light.svg",
        href: "/logo-light.svg",
      },
    ],
  },
};

async function LocaleLayout({ children, params }: ILocaleLayout) {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body className={sora.className}>
        <NextIntlClientProvider messages={messages}>
          <main>{children}</main>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}

export default LocaleLayout;
