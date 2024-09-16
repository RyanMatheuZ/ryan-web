import Image from "next/image";

import { useTranslations } from "next-intl";

import { TECHNOLOGIES } from "@/constants/technologies";

import { Text } from "@/components/elements";

import { technologiesUsed } from "./utils";

import styles from "./styles.module.css";

const ICON_SIZE = 20;

const currentYear = new Date().getFullYear();

const filteredTechnologies = TECHNOLOGIES.filter(({ iconName }) =>
  technologiesUsed.includes(iconName)
);

function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className={styles.footer}>
      <Text size="sm">
        Copyright © {currentYear} | {t("allRightsReserved")}.
      </Text>
      <Text size="sm">{t("builtWith")}:</Text>
      <div className={styles.technologies_container}>
        {filteredTechnologies.map(({ label, iconName }) => (
          <Image
            key={`${iconName}-footer`}
            src={`/icons/technologies/${iconName}.svg`}
            alt={label}
            title={label}
            width={ICON_SIZE}
            height={ICON_SIZE}
            draggable="false"
            className={styles.technology_icon}
          />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
