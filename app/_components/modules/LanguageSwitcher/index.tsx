"use client";

import Image from "next/image";

import { useLocale } from "next-intl";

import { Link, usePathname } from "@/navigation";

import clsx from "@/utils/clsx";

import { languages } from "./utils";

import styles from "./styles.module.css";

const ICON_SIZE = 20;

function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className={styles.container}>
      {languages.map(({ name, iconName, localeCode }) => (
        <Link key={localeCode} href={pathname} locale={localeCode} replace>
          <Image
            src={`/icons/countries/${iconName}.svg`}
            alt={name}
            title={name}
            width={ICON_SIZE}
            height={ICON_SIZE}
            draggable="false"
            className={clsx(
              styles.image,
              locale === localeCode ? styles.colored : styles.grayscale
            )}
          />
        </Link>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
